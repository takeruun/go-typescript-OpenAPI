# 概要
Go のコード生成ツール（oapi-codegen）

TypeScript のコード生成ツール（openapitools/openapi-generator-cli）

の検証

# 環境
- go 1.18.4
- oapi-codegen 1.10.0
- air
- echo
- react 18
- typescript

## 使い方
1. OpenAPIスキーマを定義

2. `make generate-openapi` を実行 (docker コンテナ内)

    types, server, spec の生成
  
    types: データ型の定義（OpenAPIで使用されるデータ型・APIレスポンス型など）
  
    server: サーバー設定（ルーティン・APIリクエストの受け口など）
    
    spec: リクエストのバリデーションチェック（リクエストパラメータが正常かどうかなど）

3. 実行関数インターフェース追記
`repository.go` に Api Response型 を返すような関数を定義

4. 実行関数実装
実行関数インターフェースに定義されてある、関数の実装

## (TypeScript)
```
docker run --rm -v ${PWD}:/app openapitools/openapi-generator-cli:v6.0.0 generate -i /app/docs/openapi.yml -g typescript-fetch -o app/front/src/@codegen/api -c /app/docs/front_generate_config.yml
```
プロジェクトロートディレクトで実行。(docker コンテナ外)

### memo
感想
・userコントロール・orderコントロールという風に一定の括りでまとめるのが難しいので、管理が大変。

・tagで出力を制御できるがパッケージを変える必要がある
  → 同じ型がtag毎で定義生成されてしまう。

specのみ使用なら良さそう。

リクエストパラメータのバリデーションチェック良い、使用方法もそんなに難しくない。
```
e.Use(echomiddleware.OapiRequestValidator(swagger))
```

openapitools/openapi-generator-cli はあり

・FetchAPI クラスを作成してくれて、使用時は呼び出すだけ
