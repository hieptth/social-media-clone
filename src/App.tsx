import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import { routes } from "./routes";

export const App = () => {
  return (
    <div className="App">
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
    </div>
  );
};
