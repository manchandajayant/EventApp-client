import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signUpUser } from "../Actions/userActions";
import { Redirect } from "react-router-dom";
import { UserObject } from "./interfaces";

const SignUp = () => {
  const dispatch = useDispatch();
  const user: UserObject = useSelector((state: any) => state.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = { password, email };
  const onSubmit = (event: any) => {
    event.preventDefault();
    dispatch(signUpUser(data));
  };

  if (!user.newUser) {
    return (
      <div>
        Email
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        Password
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={onSubmit}>Signup</button>
      </div>
    );
  } else {
    return <Redirect to="/events">click to login</Redirect>;
  }
};

export default SignUp;
