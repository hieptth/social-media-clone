// import { useParams } from "react-router-dom";
import { ProfileEdit } from "./ProfileEdit";
import { Form } from "../../components/Form/Form";
import { useToggle } from "../../hooks/useToggle";
import { useSelector } from "react-redux";

export const Profile = () => {
  // let { username } = useParams();
  const { username } = useSelector((state: any) => state.user.value);
  const [isVisible, toggle] = useToggle();

  return (
    <>
      <h1>This is the Profile page {username && "for " + username}</h1>
      <ProfileEdit />

      <button onClick={toggle}>{isVisible ? "Hide" : "Show"} the form</button>
      {isVisible && <Form />}
    </>
  );
};
