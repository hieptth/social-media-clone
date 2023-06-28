import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Navbar } from "./components/NavBar/Navbar";
import { routes } from "./routes";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./data/store";

export const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <Router>
            <div className="navbarWrapper">
              <div className="navbar">
                <Navbar />
              </div>
            </div>
            <main>
              <div className="content">
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
              </div>
            </main>
          </Router>
        </Provider>
      </QueryClientProvider>
    </div>
  );
};
