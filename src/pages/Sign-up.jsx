import React, { useState, useContext } from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { SigninForm } from "../components";
import { useNavigate } from "react-router-dom";

import { FirebaseContext } from "../context/firebase";

import * as ROUTES from "../constants/routes";

export default function Signup() {
  const navigate = useNavigate();

  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid =
    firstName === "" || password === "" || email === "" ? false : true;

  const handleSignUp = (e) => {
    e.preventDefault();

    // firebase
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            navigate(ROUTES.BROWSE);
          })
          .catch((err) => {
            setFirstName("");
            setEmail("");
            setPassword("");
            setError(err.message);
          });
      });
  };

  return (
    <>
      <HeaderContainer>
        <SigninForm>
          <SigninForm.Title>Sign Up</SigninForm.Title>
          {error && <SigninForm.Error>{error}</SigninForm.Error>}

          <SigninForm.Base onSubmit={handleSignUp} method="POST">
            <SigninForm.Input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <SigninForm.Input
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <SigninForm.Input
              type="password"
              placeholder="Password"
              value={password}
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />

            <SigninForm.Submit disabled={!isInvalid} type="submit">
              Sign Up
            </SigninForm.Submit>

            <SigninForm.Text>
              Already a user?{" "}
              <SigninForm.Link to="/signin">Sign in now.</SigninForm.Link>
            </SigninForm.Text>
            <SigninForm.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot.
            </SigninForm.TextSmall>
          </SigninForm.Base>
        </SigninForm>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
