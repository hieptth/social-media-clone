import { Link } from "react-router-dom";

export const NoneUser = () => {
  return (
    <>
      <h1>This is the Profile page</h1>
      <p>
        Please click <Link to={"/login"}>here</Link> to login or register.
      </p>
    </>
  );
};
