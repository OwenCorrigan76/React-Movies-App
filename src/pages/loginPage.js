import React, { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import Button from "@material-ui/core/Button";

const LoginPage = () => {
  const { authenticate } = useContext(AuthContext);

  const login = () => {
    const password = Math.random().toString(36).substring(7);
    authenticate("user1", password);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <img src={require("../images/gand2.jpeg")} height={400} width={1000} />
      <h1>You Shall Not Pass</h1>
      <h2>You must log in to access Owen Corrigan Movie App!</h2>
      <Button onClick={login} variant="contained" size="medium" color="primary">
        Login
      </Button>
    </>
  );
};

export default LoginPage;
