package controller

import (
	repository "app/api/repository"
	execution "app/execution"
)

// ServerInterface を実装するような struct を定義
type MainHandler struct {
	apiExcute repository.ApiExecuteRepository
}

func NewMainHandler() *MainHandler {
	return &MainHandler{
		apiExcute: &execution.ApiExcute{},
	}
}
