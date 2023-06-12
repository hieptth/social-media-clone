import { useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();
  return (
    <>
      <h1>This is the Home page</h1>
      <button
        onClick={() => {
          navigate("profile");
        }}
      >
        Go to Profile page
      </button>
    </>
  );
};
