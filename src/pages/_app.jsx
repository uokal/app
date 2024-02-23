import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import "@/src/styles/index.scss";
import store from "../redux";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
