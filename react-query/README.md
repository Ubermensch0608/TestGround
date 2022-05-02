# React Query

## 소개

> React Query is often described as the missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your React applications a breeze.

React Query는 더 멋진 기능을 가지고 있음에도 종종 리액트의 data-fetching 라이브러리로 설명된다. 실제로 react-query는 React에서 fetching뿐 아니라 caching, 비동기 그리고 서버단의 stater관리를 할 수 있게 하는 라이브러리이다.

## 동기부여

### client state와 server state

리액트는 초기 CSR를 기준으로 개발되어 왔기에 대부분의 state관리 라이브러리는 client side를 초점에 맞추었다. 하지만, client-side와 server-side에서 다뤄져야 할 state는 그 성격이 다르다. 또, 최근에는 only client-side의 한계를 보완하고 SEO를 충족시키는 Next.js 등이 부각되는 것과 같이 일부 server side 렌더링이 필요한 시점이기 때문에 server side state 의 관리 역시 필요한 지점이 넓어졌다고 할 수 있다.

### server state에 생소한 분들을 위해

**server state는**

- 사용자가 제어하거나 소유하지 않는 위치에서 원격으로 유지됨
- 가져오기 및 업데이트에 비동기 API 필요
- 공유 소유권을 의미하며 사용자가 모르는 사이에 다른 사용자가 변경할 수 있음
- 주의하지 않으면 응용프로그램에서 "오래된" 상태가 될 수 있습니다.
