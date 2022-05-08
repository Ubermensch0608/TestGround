import { useQuery, QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;

const Todos = () => {
  const starwarsFetchHandler = async () => {
    const res = await fetch("https://swapi.dev/api/people");
    const data = await res.json();
    return data;
  };

  const { data, status } = useQuery("people", starwarsFetchHandler);

  console.log(data, status);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul style={{ overflow: "auto" }}>
        {data.results.map((result) => (
          <li>
            <h4>{result.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};
