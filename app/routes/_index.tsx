import type { MetaFunction } from "@remix-run/node";
import App from "~/components/App";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const meta: MetaFunction = () => {
  return [
    { title: "Rick And Morty" },
    { name: "description", content: "Welcome to Rick And Morty's Universe!" },
  ];
};

function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

export default Index;
