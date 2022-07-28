package execution

import (
	api "app/api"
)

func (ae *ApiExcute) GoodMorning() (status int, result *api.GoodMorningResponse, err *api.Error) {
	return 200, &api.GoodMorningResponse{}, nil
}

func (ae *ApiExcute) Hello() (status int, result *api.HelloResponse, err *api.Error) {
	return 200, &api.HelloResponse{}, nil
}
