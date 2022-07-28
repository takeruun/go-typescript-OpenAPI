package controller

import (
	api "app/api"

	"github.com/labstack/echo/v4"
)

func (mh *MainHandler) GoodMorning(ctx echo.Context) error {
	status, result, err := mh.apiExcute.GoodMorning()

	if status != 200 {
		return ctx.JSON(status, err)
	}

	return ctx.JSON(status, result)
}

func (mh *MainHandler) Hello(ctx echo.Context, params api.HelloParams) error {
	status, result, err := mh.apiExcute.Hello()

	if status != 200 {
		return ctx.JSON(status, err)
	}

	return ctx.JSON(status, result)
}
