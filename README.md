#  Design System

디자인 시스템을 만들어 볼까요

## Setup

### 1. Github Access Token 생성

`Github` -> `Settings` -> `Developer settings` -> `Personal access tokens` -> `Generate new token` ->
`repo, write:packages, read:packages 권한 선택` -> `생성 후 나오는 토큰값을 바로 복사. (토큰값을 나중에 다시 확인 할 수 없음 주의!!!!!!)`

### 2. Global .npmrc 수정

```
$ vi ~/.npmrc

# Global .npmrc 아래 내용 등록
//npm.pkg.github.com/:_authToken=<Your_Github_Access_Token>
```

### 3. npm login
이거 안하면 인스톨 불가능!

기본 `npm registry`는 `Github package registry`가 아니기 때문!
```
$ npm login --scope=@seoulstore --registry=https://npm.pkg.github.com

> username: Github username
> password: Github Access Token
> email: Your company email address

$ npm config ls
```

## Publish
```
$ yarn publish
```

## Install
```
$ yarn add @seoulstore/design-system
```

