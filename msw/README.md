# MSW (Mock Service Worker)

## 참고 문서

<a href='https://mswjs.io/docs/'>MSW 공식 문서 & 튜토리얼</a>

## 소개

> Mock Service Worker is an API mocking library that uses Service Worker API to intercept actual requests.

MSW는 실제 요청을 가로채기 위해 Service Worker API를 사용하여 데이터 통신을 가장하여 실행하는 API이다

## 적용

### CRA 및 dependency

```
yarn create react-app your-app-name

yarn add msw --dev
```

### mock 정의하기

어떤 요청이 mocking 될 것인지 설정해주기 위해 우리는 요청을 담당하는 함수를 사용할 것이다. 이것을 이용한다면 우리는 어떤 요청이든 그것의 방식, URL 또는 다른 기준과 상관없이 시도할 수 있다. 그리고 특별히 어떤 응답을 반환받을 것인지도 특정지을 수 있다.

**mock 설정하기**

아래와 같은 경로에 handler 파일을 생성한다.

```
/src/mocks/handlers.js
```

**API 유형 선택하기**

- REST API
- GraphQL API

우리는 두 가지 유형의 API를 mocking 할 수 있다.
이번 학습에서는 REST API를 이용하여 mocking을 적용 시켜볼 것이다.

### REST API mocking 하기

먼저, 아래와 같이 msw의 rest 메서드를 import 해준다.

```
// src/mocks/handlers.js
import { rest } from "msw";
```

**핸들러 함수 요청하기**

REST API 요청을 시도하기 위해 우리는 그것의 `방식, 경로 그리고 함수`를 특정지어야 한다. 여기서 함수는 가장한 응답을 반환하는 함수이다.

```
// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.post("login/", null),

  // Handles a GET /user request
  rest.get("/user", null),
];
```

**response 담당 함수 생성**

가로채어진 요청에 응답하기 위해 가짜 응답을 특정지어야 한다. 이것을 위해 response 해결 담당 함수를 생성한다.

이 함수는 아래와 같은 arguments를 받는다.

- req, 요청에 관한 정보
- res, 까짜 응답을 만들어 내기 위한 함수형 기능
- ctx, 가짜 응답의 status code, headers, body 또는 그 외의 정보를 설정하는 것을 돕는 함수의 집합

```
// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // /login 경로의 요청을 POST하는 핸들러
  rest.post("login/", (req, res, ctx) => {
    // 세션에 유저의 로그인 정보를 저장한다.
    sessionStorage.setItem("is-authenticated", "true");

    return res(
      // 상태 코드 200을 응답한다.
      ctx.status(200)
    );
  }),

  // /user 경로에서 GET 요청하는 핸들러 함수
  rest.get("/user", (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      // 만약 승인 받지 않았다면(아이디가 없더나, 알맞지 않거나 등등) 403 에러를 반환
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
```

### 통합하기

같은 요청 함수는 브라우저와 노드 환경 양쪽에서 공유될 수 있다. Service Worker는 노드 환경에서 사용할 수 없기 때문에 통합 과정은 어떤 환경이냐에 따라 설정이 달라진다.

나는 브라우저 환경에서 실행을 가장하고 진행하였다.

### 브라우저

**사전 준비**

MSW는 요청을 가로채는 것을 담당하는 Service Worker를 등록하여 클라이언드 단에서 작동한다.

하지만, 우리는 어떤 Service Worker의 코드를 작성할 필요가 없다.
대신, 라이브러리에 의해 나누어진 worker 파일을 복사하면 된다.

MSW는 우리가 이것을 준비 하도록 전용 CLI를 제공한다.

CRA 세팅을 한 경우 터미널에 다음과 같은 커맨드를 입력하면된다.

```
npx msw init public/ --save
```

**Worker 설정하기**

Service Worker를 시작하기 위해 이전에 생성한 mocks 폴더에 browser.js 파일을 생성한다.

```
    src/mocks/browser.js
```

이 파일에서는 이전에 만들었던 handler 함수를 사용하는 worker를 설정해줄 것이다. 다른 말로, 우리가 원하는 기능을 하진 custom worker를 설정한다고 보면 될 것 같다.

**Worker 시작하기**

런타임 중에 모의 정의를 실행하려면 응용 프로그램의 코드로 가져와야 한다. 그러나 모킹은 개발 지향적인 기술이기 때문에 현재 환경에 따라 조건부로 src/mocks/browser.js 파일을 가져올 것이다.

> mock 서버를 상품 단계에서 사용하는 것은 유저 환경을 왜곡시킬 수 있기 때문에 추천되는 방법이 아니라고 한다.

```
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

위와 같이 src/index.js 파일에 개발 환경에서 실행 중일 경우에만 worker가 실행되도록 설정해준다.

**확인 및 검사**

mock 정의를 import 하고 난 이후에 우리는 브라우저 콘솔창에서 MSW가 모의 request를 가로챈 것을 확인 할 수 있다.

<img src='public/img/verify MSW work.png' alt='msw verified'>
