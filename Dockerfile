FROM golang:1.18.4-alpine

RUN apk update && apk --no-cache add git build-base

WORKDIR /go/src/app

COPY . .

RUN go mod tidy
RUN go install golang.org/x/tools/gopls@latest && \ 
  go install github.com/rubenv/sql-migrate/...@latest && \
  go install github.com/cosmtrek/air@latest && \
  go install github.com/golang/mock/mockgen@latest && \
  go install github.com/deepmap/oapi-codegen/cmd/oapi-codegen@latest

CMD ["air"]