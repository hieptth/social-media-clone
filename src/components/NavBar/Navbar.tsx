import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";
import "./Navbar.css";

export const Navbar = () => {
  const { username } = useContext(AppContext);

  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={`/profile/${username}`}>Profile</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
    </>
  );
};
