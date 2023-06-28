import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Explore } from "./pages/Explore/Explore";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Message } from "./pages/Message/Message";
import { Profile } from "./pages/Profile/Profile";
import { Shorts } from "./pages/Shorts/Shorts";

export const routes = [
  { path: "", component: Home },
  { path: "explore", component: Explore },
  { path: "shorts", component: Shorts },
  { path: "message/inbox", component: Message },
  { path: "profile/:username", component: Profile },
  { path: "login", component: Login },
  { path: "*", component: ErrorPage },
];
