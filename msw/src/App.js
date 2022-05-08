import axios from "axios";

const App = () => {
const fetchHandler = async() => {
  const req = await axios.post('/login')
  req.data = {
    
 }
}

  return <div><button onClick={fetchHandler}></button></div>;
};

export default App;
