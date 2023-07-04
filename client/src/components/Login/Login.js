import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import loginStyle from "./Login.module.css";
import { auth } from "../firebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cpassword, setCPassword] = useState("");

  const handleSwitching = () => {
    setIsNewUser((prev) => !prev);
  };
  const handleNewUser = async () => {
    if (cpassword != password) {
      alert("Passwords not matching");
      return;
    }
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      setPassword("");
      setEmail("");
      setCPassword("");
    } catch (e) {
      alert("Some error occured try again....");
    }
  };

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setPassword("");
      setEmail("");
      setCPassword("");
    } catch (e) {
      alert("Some error occured try again....");
    }
  };
  return (
    <>
      <Paper className={loginStyle.container} elevation={9}>
        {!isNewUser && <div>Login</div>}
        {isNewUser && <div>New user</div>}
        <TextField
          variant="outlined"
          label="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isNewUser && (
          <TextField
            variant="outlined"
            label="confirm password"
            name="cpassword"
            placeholder="Enter password again"
          />
        )}

        <Button
          variant="outlined"
          onClick={isNewUser ? handleNewUser : handleLogin}
        >
          Submit
        </Button>
        <Button color="secondary" onClick={handleSwitching}>
          {isNewUser ? "Sign in" : "Sign up"}
        </Button>
      </Paper>
    </>
  );
}
