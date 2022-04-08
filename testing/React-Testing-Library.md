# React Testing Library

## 소개

React Testing Library(RTS)는 리액트 컴포넌트에서 여러 API와 함께 사용하는 `DOM 테스트 라이브러리`이다.

CRA를 할 때 기본적으로 npm 패키지에 포함이 되어있으나, 혹시 CRA를 사용하지 않는다면 수동으로 설치해야한다.

```
npm install --save-dev @testing-library/react
```

## 문제 상황

## 해결책

RTL는 리액트 컴포넌트 테스트를 위한 **아주 가벼운 방법**이다. react-dom 밑에 담겨있는 가벼운 함수 기능을 제공하여 양질의 테스트를 만든다.

실제 유저가 행동하는 방식대로 테스트를 진행하기 때문에 이를 이용한 좋은 테스트는 **실제 유저의 더 나은 경험**과 유사하다.

기존에 널리 사용하던 Enzyme을 이용한 테스트를 **대체하기 위해 개발**되었다.
Enzyme은 테스팅을 위해 초기에 알아야하는 것이 많고, 설정해야하는 옵션이 다양한 점이 강점이자 단점이다. props혹은 state검사 등 실제 **유저가 경험하는 것**과는 거리가 먼 요소조차 테스트를 해야하는 것은 때로는 비효율적이라고 볼 수도 있다.

**참고 유튜브 영상** -
<a href='https://www.youtube.com/watch?v=JKOwJUM4_RM'>What Is React Testing Library?</a>

## 적용해보기

**참조 문서**
<a href='https://www.robinwieruch.de/react-testing-library/'>React Testing Library Tutorial</a>

**getByText - 요소(element)탐색**

```
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App was tested", () => {
  test("renders App component", () => {
    render(<App />);

    expect(screen.getByText("Search:")).toBeInTheDocument(); // pass
    expect(screen.getByText("Search")).toBeInTheDocument();  // error
    expect(screen.getByText(/Search/)).toBeInTheDocument();  // pass
    screen.debug();
  });
});
```

앞에서 보았듯이, RTL은 실질적으로 컴포넌트가 렌더링되어 유저에게 보이는 것을 중점으로 테스트 한다.

- screen은 화면에 렌더링 되는 node를 가리킨다.
- getByText는 그 node에 포함된 text value를 찾아서 boolean값으로 반환한다. false일 경우 error
- toBeInTheDocument(); 메서드로 해당 요소가 DOM에 존재하는지 확인

**getByRole - type 확인**

- getByRole은 보통 label-aria 요소를 통해 검색된다.
- 표시되는 Text뿐 아니라 **접근하기 위한 역할**로도 요소를 선택할 수 있다.
- 요소에 접근할 수 없는 경우 error를 반환한다.

```
describe("App was tested", () => {
  test("renders App component", () => {
    render(<App />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    screen.debug();
  });
});
```

textbox에 접근한 수 있는지 확인

> DOM에는 이미 HTML 요소에 암묵적인 역할이 붙어 있기 때문에 테스트를 위해 HTML 요소에 명시적으로 aria-role을 할당할 필요가 없는 경우가 많다. 이것이 RTL에서 **요소 검색 기능**으로 getByRole()을 getByText()의 강력한 경쟁자로 만드는 이유다.

getByRole은 우리가 테스트를 할 때 기존 코드에 어떤 부가적인 설정이 필요 없게 한다. HTML에는 이미 어떠한 속성이 존재하기 때문에 그것을 잘 이용하기만 한다면, 어렵지 않게 원하는 요소에 대한 접근이 가능하다.

### 기타 검색 기능

추가 검색 기능은 크게 두 가지로 분류된다.

> queryBy, findBy

**getBy와 queryBy의 차이점**
getBy의 경우 검사 여부에 따라 요소를 반환하거나 에러를 발생시킨다. 에러를 미리 알림으로 개발자가 사전에 수정할 여지를 준다. 하지만, 이것은 어떠한 요소가 해당 영역에 없는 것을 체크하는 것은 어렵다

```
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App was tested", () => {
  test("renders App component", () => {
    render(<App />);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });
});
```

> 어떠한 요소가 없을 것이라 예측될 때는 queryBy를 사용하면 된다.

**findBy**

findBy메서드는 비동기의 결과인 요소를 확인할 때 사용한다.

```
describe("App was tested", () => {
  test("renders App component", async () => {
    render(<App />);

    expect(screen.queryByText(/Signed in as/)).toBeNull();
    screen.debug();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
    screen.debug();
  });
});
```

위 코드의 결과를 screen.debug()를 통해 보면 다음과 같다.

```
// queryBy로 탐색한 결과(동기적인 처리만 받아옴)
<body>
        <div>
          <div>
            <div>
              <label
                for="search"
              >
                Search:
              </label>
              <input
                id="search"
                type="text"
                value=""
              />
            </div>
            <p>
              Searches for
              ...
            </p>
          </div>
        </div>
      </body>


// findBy로 검색된 결과(비동기 결과까지 포함)
      <body>
        <div>
          <div>
            <p>
              Signed in as
              Robin
            </p>
            <div>
              <label
                for="search"
              >
                Search:
              </label>
              <input
                id="search"
                type="text"
                value=""
              />
            </div>
            <p>
              Searches for
              ...
            </p>
          </div>
        </div>
      </body>
```

queryBy로는 맨 처음에 렌더링 될 때 요소가 존재하지 않으면, 해당 값은 없는 것으로 취급한다.
반대로, findBy는 비동기로 받아오는 값에 의해 re-render이 발생한 시점에서 요소를 찾기 때문에 비동기로 처리된 요소까지 선택이 가능하다.

**요약**

> 처음엔 없지만, 비동기적으로 추후 생길 요소 → findBy
> 요소가 없는 것으로 예측될 때 → queryBy
> 그 외 대부분의 경우 → getBy

**다수의 요소를 탐색하고 싶을 때**
React에서는 다수의 동일한 컴포넌트를 list의 형태로 재사용하여 동적 렌더링하는 경우가 많다. 이럴 경우에는 getAllBy, queryAllBy, findAllBy와 같이 다수의 요소를 검색하는 메서드를 이용하면된다.

### 다양한 탐색기능을 가진 함수

기본적으로 toBeNull과 같이 탐색기능을 가진 함수들은 jest에 내장되어 있는 탐색 기능 메서드이다. 하지만, RTL는 이것을 확장하여 toBeInTheDocument와 같이 더 편리한 탐색 기능을 제공한다.

### FireEvent

**가상 이벤트를 사용할 필요성**
현대의 웹사이트는 유저와의 상호작용을 중요시하는 interactive하고, reactive한 웹사이트로 발전하고 있다. 일반적으로 유저가 타이핑, 클릭 등 어떤 이벤트를 발생시키면, 그에 맞는 값의 변화와 re-render이 이루어진다. 이벤트에 따라 화면의 형태는 계속해서 변한다는 것이다.

따라서, 유저에게 보여지는 화면에 어떤 요소가 있는지 뿐 아니라, 유저가 어떤 이벤트를 발생시키고 난 뒤에 렌더링되는 화면까지 신경써야할 필요가 있다.

**userEvent**
