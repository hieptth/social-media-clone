import { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import User from "./User";
uuidv4();

const Header = () => {
  const users = [
    { id: uuidv4(), name: "Hak", age: 22, email: "hieptth71@gmail.com" },
    { id: uuidv4(), name: "Jake", age: 15, email: "jakieluv22@gmail.com" },
    { id: uuidv4(), name: "Pedro", age: 27, email: "pedrotech@gmail.com" },
  ];

  const [inputName, setInputName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${inputName}`).then((res) =>
      setPredictedAge(res.data.age)
    );
  };

  return (
    <>
      <h2>List of User</h2>
      <input
        type="text"
        name="inputName"
        placeholder="Type in the name ..."
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <button onClick={fetchData}>Press me!</button>
      <p>Predicted age: {predictedAge}</p>
      <div className="userList">
        {users.map((value) => (
          <div key={value.id}>
            <hr />
            <User
              key={value.id}
              name={value.name}
              age={value.age}
              email={value.email}
            />
          </div>
        ))}
        ;
      </div>
    </>
  );
};

export default Header;
