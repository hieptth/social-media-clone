import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import { useGetCat } from "../hooks/useGetCat";

export const Home = () => {
  let navigate = useNavigate();
  const { username } = useContext(AppContext);
  const { data: catData, isLoading, refetchData } = useGetCat();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <h1>Hello {username}, this is the Home page</h1>
      <h3>Here is a cat fact, enjoy:</h3>
      <div>{catData?.fact}</div>
      <button onClick={refetchData}>Update Data</button>

      <br />
      <h3>To Profile Page</h3>
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
