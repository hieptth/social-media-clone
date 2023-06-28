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
        <Link className="link" to={"/explore"}>
          Explore
        </Link>
        <Link className="link" to={"/shorts"}>
          Shorts
        </Link>
        <Link className="link" to={"/message/inbox"}>
          Messages
        </Link>
        <Link className="link" to={`/profile/${username}`}>
          Profile
        </Link>
        <Link className="link" to={"/login"}>
          Login
        </Link>
      </nav>
    </>
  );
};
