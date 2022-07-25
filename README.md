# TestGround

프로젝트에 필요한 기능을 학습하고 적용시켜보는 레포지토리입니다.

1. ContextAPI 연습

   1. createContext
   2. Provider
   3. useContext

2. Redux 연습

   1. createStore
      - 상태관리를 위한 store 생성
   2. Provider
      - store를 전역에서 관리할 수 있도록 App컴포넌트에 Provider 및 store 설정
      - `<Provider store={store}><App/></Provider>`
   3. useSelector
      - 원하는 컴포넌트에서 state를 사용하기 위해 useSelector 이용
      - 필요한 state 지정을 잘 해주어야 함
      - ex) const todoState = useSelector(state=> state.todoTextId)
   4. useDispatch
      - 변동되는 state는 dispath로 관리한다.
      - const dispatch = useDispatch() 로 정의
      - dispatch({type: '설정한 type', payload: '제공될 새로운 값' })

3. Jotai 연습

   1. atom 만들기

      - initial state 생성
      - import { atom } from 'jotai'
      - const testAtom = atom('') 과 같이 생성

   2. useAtom 으로 불러오기
      - useState의 [ testState, setTestState ]와 같이 쓸 수 있음
      - import { useAtom } from 'jotai'
      - import testAtom from '...'
      - 위에서 생성한 atom 불러와서 사용
      - const [ testAtomState, setTestAtomState ] = useAtom(testAtom)
      - testAtomState값은 저장된 state값
      - setTestAtomState는 setter 함수 (testAtomState를 변경시키는 함수)

## 7. Testing

**더 자세한 내용**

<a href='https://github.com/Ubermensch0608/TestGround/tree/main/testing'>Enzyme과 RTL비교 / React에서 테스트란? </a>

<a href='https://github.com/Ubermensch0608/TestGround/blob/main/testing/React-Testing-Library.md'>React Testing Library 적용하기</a>


12. Next-Auth, JWT, Session Token
