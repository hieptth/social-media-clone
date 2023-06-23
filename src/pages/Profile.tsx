// import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import { ProfileEdit } from "../components/ProfileEdit/ProfileEdit";
import { Form } from "../components/Form/Form";
import { useToggle } from "../hooks/useToggle";

export const Profile = () => {
  // let { username } = useParams();
  const { username } = useContext(AppContext);
  const [isVisible, toggle] = useToggle();

  return (
    <>
      <h1>This is the Profile page for {username}</h1>
      <ProfileEdit />

      <button onClick={toggle}>{isVisible ? "Show" : "Hide"} the form</button>
      {isVisible && <Form />}
    </>
  );
};
