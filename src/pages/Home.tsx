import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
  let navigate = useNavigate();
  const { username } = useContext(AppContext);

  return (
    <>
      <h1>Hello {username},This is the Home page</h1>
      <button
        onClick={() => {
          navigate(`profile/${username}`);
        }}
      >
        Go to Profile page
      </button>
    </>
  );
};
