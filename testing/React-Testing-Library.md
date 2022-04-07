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

**기타 검색 기능**
