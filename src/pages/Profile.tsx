// import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import { ProfileEdit } from "../components/ProfileEdit/ProfileEdit";
import { Form } from "../components/Form/Form";

export const Profile = () => {
  // let { username } = useParams();
  const { username } = useContext(AppContext);

  return (
    <>
      <h1>This is the Profile page for {username}</h1>
      <ProfileEdit />
      <div>
        <Form />
      </div>
    </>
  );
};
