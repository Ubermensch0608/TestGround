import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { getTodos, postTodo } from "./my-api";

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
  // 클라이언트에 접근
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery("todos", getTodos);

  // Mutations
  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      // 무효화와 재fetch
      queryClient.invalidateQueries("todos");
    },
  });

  return (
    <div>
      <ul>
        {query.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Do Laundry",
          });
        }}>
        Add Todo
      </button>
    </div>
  );
};
