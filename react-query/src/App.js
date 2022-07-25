import { useQuery, QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Posts from './Posts';
import './app.css';

const App = () => {
  return (
    <div className="App">
      <h1>blog</h1>
      <Posts />
    </div>
  );
};

export default App;
