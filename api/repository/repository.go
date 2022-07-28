package repository

import "app/api"

// Api Response型　を返すように定義
type ApiExecuteRepository interface {
	GoodMorning() (status int, result *api.GoodMorningResponse, err *api.Error)
	Hello() (status int, result *api.HelloResponse, err *api.Error)
}
