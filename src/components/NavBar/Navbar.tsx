import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  CollapseIcon,
  CreateLogo,
  ExploreLogo,
  HomeLogo,
  MessageLogo,
  NotificationsLogo,
  SearchLogo,
  ShortsLogo,
} from "../UI/IconPack";
import pfp from "../../assets/imgs/pfp.jpg";

export const Navbar = () => {
  const { username } = useSelector((state: any) => state.user.value);

  return (
    <>
      <nav>
        <div className="logoWrapper">
          <div className="logoInnerWrapper">
            <Link to={""}>
              <p>Chernyy</p>
            </Link>
          </div>
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
              <div className="pfpWrapper">
                <img src={pfp} alt="personalProfilePicture"></img>
              </div>
            </div>
            <div className="navLinkTextWrapper">
              <div style={{ width: "100%" }}>
                <div className="innerContainer">Profile</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="navMore">
          <div className="navMoreWrapper">
            <div className="innerBox">
              <div className="navLinkLogo">
                <CollapseIcon />
              </div>
              <div className="navLinkTextWrapper">
                <div style={{ width: "100%" }}>
                  <div className="innerContainer">More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
