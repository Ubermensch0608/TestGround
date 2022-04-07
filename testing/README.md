# React project with Testing

**테스트의 필요성**
테스트는 구현한 사항이 실제 작동을 하는지 가상 환경에서 시도해보는 것이다. 몇 가지 기능만 있는 프로젝트일 경우, 사람이 직접 버그가 있는지, 예측한 대로 작동을 하는지 시연해볼 수 있다. 하지만, 기능이 많아질 수록 사람이 일일이 그 작업을 하는 것은 비효율적이다. (몇 백, 몇 천개의 리스트가 있는지 모두 확인하는 것을 상상해보아라...)

그렇게 **테스트**라는 것이 필요하게 되었다. 웹과 스마트 기기가 발전하면서 하나의 서비스의 컨텐츠 및 기능이 폭발적으로 증가했기 때문이다.

특히, 기업의 서비스는 고객이 구매하는 상품이기 때문에 상품 개발을 효율적이고 생산적이게 하기 위해서는 서비스 배포를**자동화**하는 것이 자원을 효율적이게 사용할 수 있는 방법인 점도 있다. 즉, 테스트를 이해하는 것은 CI/CD를 구현하기 위해 필요하다.

테스트에는 세부 기능을 일일이 검사하는 단위 테스트(unit test)부터 전반적인 흐름을 검사하는 통합 테스트(integration test)까지 다양한 방식의 테스트가 존재한다.

**프로젝트 진행 방향**
이 프로젝트에서는 리액트 테스팅 중 많은 개발자에 의해 사용되는 `react-testing-libray`와 `enzyme`을 사용해보아 다음과 같은 점을 알아보려고 한다.

- 둘의 공통점 → 테스팅의 공통적인 흐름, 추구하는 것, 스타일
- 둘의 장단점
  - 대중적인 평가
  - 개인적인 평가

## React-Testing-Library(RTL)

> To reduce the boilerplate, we recommend using React Testing Library which is designed to encourage writing tests that use your components as the end users do.

React 공식 문서에서도 hooks 테스트 시 RTL 사용을 권장한다.

npm을 통한 추가 라이브러리 설치가 있어야한다고 생각했지만, CRA패키지에 이미 포함되어 있는 라이브러이였다..!

참고 문서:
<a href='https://testing-library.com/docs/react-testing-library/intro/'>React-Testing-Library 공식 문서</a>

참고 문서:
<a href='https://www.boyney.io/blog/2019-05-21-my-experience-moving-from-enzyme-to-react-testing-library'>My experience moving from Enzyme to react-testing-library - DAVID BOYNE</a>

### Enzyme과 RTL의 차이점

**Enzyme**

- 테스트를 기능 구현에 초점을 맞추고 있다.

**React Testing Library**

- 테스트를 사용자의 행동(유저 이벤트)에 중점을 둔다.
- 테스트 속도가 비교적 빠르다.

다양한 npm 라이브러리를 제작한 **Kent C. Dodds**는 다음과 같은 말을 트위터에 올렸다.

> The more your tests resemble the way your software is used, the more confidence they can give you.
>
> -Kent C. Dodds -

둘은 테스트가 어떠한 점에 중점이 되었느냐에 따라 선택하여 사용할 수 있겠지만, RTL은 보다 사용자의 행동 즉, **사용자**에 중점을 둔 테스트 방식이라는 점에서 매력적이게 보인다.

Kent C. Dodds의 말처럼 우리가 만드는 서비스는 사용자 중심이 될 때 사용자가 더 만족하고, 더 자주 이용하게 되는 결과로 이어질 확률이 높을 것이다.

**테스트의 선순환**

> Write tests → Build accessible components → Tests Pass

개발자는 이러한 순환을 통해 좋은 코드를 관리할 수 있고, 안전한 테스트를 마칠 수 있다. 하지만, 더 중요한 것은 이것이 사용자의 사용성과 접근성을 높인다는 점이다.
