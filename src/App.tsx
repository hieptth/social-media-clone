import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import { routes } from "./routes";
import "./App.css";
import { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface ContextProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<ContextProps>({
  username: "",
  setUsername: () => {
    throw new Error("No username available.");
  },
});

export const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const [username, setUsername] = useState("Hak");

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ username, setUsername }}>
          <Router>
            <Navbar />
            <Routes>
              {routes.map((route) => {
                const Page = route.component;
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<Page />}
                  />
                );
              })}
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
};
