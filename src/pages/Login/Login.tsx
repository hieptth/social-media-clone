import React, { useState } from "react";
import { login, logout } from "../../data/store";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const [newUsername, setNewUsername] = useState<string>("");

  const dispatch = useDispatch();
  const { username } = useSelector((state: any) => state.user.value);

  return (
    <>
      {username === "" ? <h1>Login</h1> : <h1>Hello, {username}</h1>}
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewUsername(e.target.value);
        }}
      />
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        Submit
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
};
