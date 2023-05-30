import User from "./User";

const Header = () => {
  const users = [
    { name: "Hak", age: 22, email: "hieptth71@gmail.com" },
    { name: "Jake", age: 15, email: "jakieluv22@gmail.com" },
    { name: "Pedro", age: 27, email: "pedrotech@gmail.com" },
  ];

  return (
    <>
      <h2>List of User</h2>
      {users.map((value, key) => {
        return (
          <>
            <hr></hr>
            <User
              key={key}
              name={value.name}
              age={value.age}
              email={value.email}
            />
          </>
        );
      })}
    </>
  );
};

export default Header;
