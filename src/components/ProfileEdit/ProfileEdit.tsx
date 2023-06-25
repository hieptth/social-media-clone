import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store";

export const ProfileEdit = () => {
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();

  const handleNameChange = () => {
    dispatch(login({ username: newUsername }));

    setNewUsername("");
  };

  return (
    <>
      <input
        type="text"
        name="newUsernameInput"
        onChange={(e) => setNewUsername(e.target.value)}
        value={newUsername}
      />
      <button type="button" onClick={() => handleNameChange()}>
        Change name
      </button>
    </>
  );
};
