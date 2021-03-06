import MyModal from "components/MyModal";
import MyTab from "components/MyTab";
import MyTag from "components/MyTag";
import styled from "styled-components";
import MyToggle from "./components/MyToggle";

const App = () => {
  return (
    <Wrapper>
      <MyToggle />
      <MyModal />
      <MyTab />
      <MyTag />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 800px;
  padding: 100px;
  margin-left: 10%;
`;
export default App;
