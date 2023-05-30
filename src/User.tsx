const User = (props: { name: string; age: number; email: string }) => {
  const isGreen = props.age > 18;

  return (
    <>
      <h4>Username: {props.name}</h4>
      <h5 style={{ color: isGreen ? "green" : "red" }}>
        Age: {props.age}
        {props.age < 18 && " - Illegal age"}
      </h5>
      <h5>Email: {props.email}</h5>
    </>
  );
};

export default User;
