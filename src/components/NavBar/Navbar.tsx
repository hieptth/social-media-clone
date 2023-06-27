import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { username } = useSelector((state: any) => state.user.value);

  return (
    <>
      <nav>
        <Link className="link" to={"/"}>
          Home
        </Link>
        <Link className="link" to={`/profile/${username}`}>
          Profile
        </Link>
        <Link className="link" to={"/contact"}>
          Contact
        </Link>
        <Link className="link" to={"/login"}>
          Login
        </Link>
      </nav>
    </>
  );
};
