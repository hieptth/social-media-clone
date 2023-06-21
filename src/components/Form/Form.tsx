import "./Form.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name cannot be empty!"),
    email: yup.string().email("This is not a valid email address!"),
    age: yup
      .number()
      .positive() // can be omitted if min is > 0
      .integer("Your age should be a number!")
      .min(18, "You must be older than 18 years old to use this site!")
      .max(81, "You are too old for this site, please rest!")
      .required("Please specify your age!"),
    password: yup
      .string()
      .min(4, "Must have more than 4 characters!")
      .max(20, "Must have less than 20 characters!")
      .required("You need a password to secure your account!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match!")
      .required("Please confirm your password!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Full name ..."
        {...register("fullName")}
      />
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email ..." {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age ..." {...register("age")} />
      <p>{errors.age?.message}</p>
      <input
        type="password"
        placeholder="Password ..."
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <input
        type="password"
        placeholder="Confirm Password ..."
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" value="Click Me" />
    </form>
  );
};
