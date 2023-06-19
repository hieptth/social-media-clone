import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
  let navigate = useNavigate();
  const { username } = useContext(AppContext);
  const queryID = ["cat"]; // should be array of unique query ids
  const {
    data: catData, // customize data name
    isLoading,
    refetch,
  } = useQuery(queryID, async () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <h1>Hello {username}, this is the Home page</h1>
      <h3>Here is a cat fact, enjoy:</h3>
      <div>{catData?.fact}</div>
      <button
        onClick={() => {
          navigate(`profile/${username}`);
        }}
      >
        Go to Profile page
      </button>
      <button onClick={() => refetch()}>Update Data</button>
    </>
  );
};
