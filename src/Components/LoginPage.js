import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Actions/userActions";
import { useParams, Redirect } from "react-router-dom";
import { Grid } from "@material-ui/core";

const LoginPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = { password, email };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login(data));
  };

  if (user.auth) {
    return <Redirect to="/events"></Redirect>;
  } else {
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
        <button onClick={onSubmit}>CREATE</button>
      </div>
    );
  }
};

export default LoginPage;
