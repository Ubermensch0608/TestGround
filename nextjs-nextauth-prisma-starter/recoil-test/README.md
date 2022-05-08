## Recoil

recoil은 facebook opensource 팀에서 제작한 전역상태관리 툴이다. 2020년에 공개하기 시작한 이 툴은 점차 관심을 받기 시작해 현재는 많은 기업에서 도입할 정도로 **쓸만한**전역상태 관리 툴로 인정받고 있다.

recoil의 가장 큰 강점은 **간편함**이라고 할 수 있다. redux 같이 boiler-plate와 초기세팅 시간의 낭비가 심했던 전역 상태 관리 툴은 점차 **가성비**적인 측면에서 대안이 요구되었다. 그 결과 최근에는 recoil, jotai와 같은 light-weight 전역 상태 관리 툴이 인기있는 추세이다.

recoil은 초기 세팅에 드는 시간이 거의 없다시피 하며, 리액트 개발자에게 익숙한 useState의 사용과 거의 동일하게 state 값의 참조와 변경이 가능하다. 때문에 최초 적용에 드는 시간, 실제 프로젝트에서 전역 상태 관리 등 업무 효율성 및 생산성을 극대화 시킨다.

그렇다면 recoil은 어떻게 쓰는 걸까? 아래의 공식문서를 참고하여 직접 사용해보았다.

**참고문서**

<a href='https://recoiljs.org/ko/docs/introduction/getting-started
'>Recoil팀 공식문서</a>

## 사용 방법

### 초기 세팅

recoil은 **단 하나의**초기 세팅만 한다면 앱 전역에서 해당하는 state를 구독할 수 있게 된다.

```
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
```

사용하고자 하는 컴포넌트를 recoil에서 제공하는 **RecoilRoot**로 감싸 state를 구독할 수 있게 한다.

정말 이게 끝이다.

### store 만들기

개인적으로 state관리는 src/store.js 파일에서 하는 것을 선호한다. 파일 이름은 index.js 나 어떤 것이든 상관 없다.

전역 state를 관리하기로 정한 파일에서 먼저 state의 초기 설정을 한다. 이는 state를 사용한다고 선언하는 것과 비슷하다.

```
import { atom } from "recoil";

export const inputState = atom({
  key: "input",
  default: "",
});
```

`atom`을 사용하여 전역으로 관리하기를 원하는 state를 생성해준다.

### useRecoilState

이후에는 useState의 사용과 거의 동일하다.
`useRecoilState`를 import 해준 뒤에 사용하기를 원하는 state가 담긴 atom을 담아주면 된다.

여기서는 조금 전 생성한 inputState를 담으면 될 것이다.

```
import { useRecoilState } from "recoil";
import { inputState } from "./store";

const [charactor, setCharactor] = useRecoilState(inputState)
```

charator은 state의 값이 될 것이고, setCharactor은 useState의 두 번째 인자인 setter함수 처럼 state를 변경시켜준다.
