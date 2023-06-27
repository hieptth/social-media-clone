import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Profile } from "./pages/Profile/Profile";

export const routes = [
  { path: "", component: Home },
  { path: "profile/:username", component: Profile },
  { path: "contact", component: Contact },
  { path: "login", component: Login },
  { path: "*", component: ErrorPage },
];
