import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { username } = useSelector((state: any) => state.user.value);

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
