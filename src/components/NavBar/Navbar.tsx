import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const username = "Hak";

  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={`/profile/${username}`}>Profile</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/login"}>Login</Link>
      </nav>
    </>
  );
};
