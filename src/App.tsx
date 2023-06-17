import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import { routes } from "./routes";
import "./App.css";
import { createContext, useState } from "react";

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
  const [username, setUsername] = useState("Hak");

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            {routes.map((route) => {
              const Page = route.component;
              return (
                <Route key={route.path} path={route.path} element={<Page />} />
              );
            })}
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
};
