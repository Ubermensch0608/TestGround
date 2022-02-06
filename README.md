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
      - ```<Provider store={store}><App/></Provider>```
      
   3. useSelector
      - 원하는 컴포넌트에서 state를 사용하기 위해 useSelector 이용
      - 필요한 state 지정을 잘 해주어야 함 
      - ex) const todoState = useSelector(state=> state.todoTextId)
       
   6. useDispatch    
      - 변동되는 state는 dispath로 관리한다.
      - const dispatch = useDispatch() 로 정의
      - dispatch({type: '설정한 type', payload: '제공될 새로운 값' }) 
