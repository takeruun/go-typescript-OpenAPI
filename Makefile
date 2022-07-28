generate-types: 
	oapi-codegen -old-config-style -generate "types" -package api docs/openapi.yml > ./api/models.gen.go

generate-server:
	oapi-codegen -old-config-style -generate "server" -package api docs/openapi.yml > ./api/server.gen.go

generate-spec:
	oapi-codegen -old-config-style -generate "spec" -package api docs/openapi.yml > ./api/spec.gen.go

generate-openapi: generate-types generate-server generate-spec