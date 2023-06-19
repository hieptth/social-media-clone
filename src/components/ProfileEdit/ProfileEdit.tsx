import { useState, useContext } from "react";
import { AppContext } from "../../App";

export const ProfileEdit = () => {
  const [newUsername, setNewUsername] = useState("");
  const { setUsername } = useContext(AppContext);

  const handleNameChange = () => {
    setUsername(newUsername);

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
