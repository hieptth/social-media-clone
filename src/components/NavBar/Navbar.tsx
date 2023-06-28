import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  CreateLogo,
  ExploreLogo,
  HomeLogo,
  MessageLogo,
  NotificationsLogo,
  SearchLogo,
  ShortsLogo,
  UserLogo,
} from "../UI/IconPack";

export const Navbar = () => {
  const { username } = useSelector((state: any) => state.user.value);

  return (
    <>
      <nav>
        <div className="logoWrapper">
          <a href="/">Logo</a>
        </div>

        <div className="navLinkWrapper">
          <Link className="link" to={"/"}>
            <div className="navLinkLogo">
              <HomeLogo />
            </div>
            <div className="navLinkTextWrapper">
              <div style={{ width: "100%" }}>
                <div className="innerContainer">Home</div>
              </div>
            </div>
          </Link>

          <Link className="link" to={"/#"}>
            <div className="navLinkLogo">
              <SearchLogo />
            </div>
            <div className="navLinkTextWrapper">
              <div style={{ width: "100%" }}>
                <div className="innerContainer">Search</div>
              </div>
            </div>
          </Link>

          <Link className="link" to={"/explore"}>
            <div className="navLinkLogo">
              <ExploreLogo />
            </div>
            <div className="navLinkTextWrapper">
              <div style={{ width: "100%" }}>
                <div className="innerContainer">Explore</div>
              </div>
            </div>
          </Link>

          <Link className="link" to={"/shorts"}>
            <div className="navLinkLogo">
              <ShortsLogo />
            </div>
            <div className="navLinkTextWrapper">
              <div style={{ width: "100%" }}>
                <div className="innerContainer">Shorts</div>
              </div>
            </div>
          </Link>

          <Link className="link" to={"/message/inbox"}>
            <div className="navLinkLogo">
              <MessageLogo />
            </div>
            <div className="navLinkTextWrapper">
              <div style={{ width: "100%" }}>
                <div className="innerContainer">Messages</div>
              </div>
            </div>
          </Link>

          <Link className="link" to={"/#"}>
            <div className="navLinkLogo">
              <NotificationsLogo />
            </div>
            <div className="navLinkTextWrapper">
              <div style={{ width: "100%" }}>
                <div className="innerContainer">Notifications</div>
              </div>
            </div>
          </Link>

          <Link className="link" to={"/#"}>
            <div className="navLinkLogo">
              <CreateLogo />
            </div>
            <div className="navLinkTextWrapper">
              <div style={{ width: "100%" }}>
                <div className="innerContainer">Create</div>
              </div>
            </div>
          </Link>

          <Link className="link" to={`/profile/${username}`}>
            <div className="navLinkLogo">
              <UserLogo />
            </div>
            <div className="navLinkTextWrapper">
              <div style={{ width: "100%" }}>
                <div className="innerContainer">Profile</div>
              </div>
            </div>
          </Link>

          <Link className="link" to={"/login"}>
            Login
          </Link>
        </div>

        <div className="navMore">
          <p>More</p>
        </div>
      </nav>
    </>
  );
};
