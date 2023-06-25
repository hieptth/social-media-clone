import { useNavigate } from "react-router-dom";
import { useGetCat } from "../hooks/useGetCat";
import { useSelector } from "react-redux";

export const Home = () => {
  let navigate = useNavigate();
  const { username } = useSelector((state: any) => state.user.value);
  const { data: catData, isLoading, refetchData } = useGetCat();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <h1>{username && `Hello ${username}!`} This is the Home page</h1>
      <h3>Here is a cat fact, enjoy:</h3>
      <div>{catData?.fact}</div>
      <br />
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
