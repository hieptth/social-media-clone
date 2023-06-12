import { useParams } from "react-router-dom";

export const Profile = () => {
  let { username } = useParams();
  return <h1>This is the Profile page for {username}</h1>;
};
