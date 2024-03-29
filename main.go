package main

import (
	api "app/api"
	controller "app/controller"
	"fmt"
	"net/http"
	"os"

	echomiddleware "github.com/deepmap/oapi-codegen/pkg/middleware"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	swagger, err := api.GetSwagger()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error loading swagger spec\n: %s", err)
		os.Exit(1)
	}
	swagger.Servers = nil

	// Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3001"},
		AllowMethods: []string{http.MethodGet, http.MethodPut, http.MethodPost, http.MethodDelete, http.MethodOptions},
	}))
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(echomiddleware.OapiRequestValidator(swagger))

	mainHandler := controller.NewMainHandler()

	api.RegisterHandlers(e, mainHandler)

	e.Logger.Fatal(e.Start(":3000"))
}
