import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

export const routes = [
  { path: "", component: Home },
  { path: "profile/:username", component: Profile },
  { path: "contact", component: Contact },
  { path: "*", component: ErrorPage },
];
