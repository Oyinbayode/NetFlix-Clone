import React, { useState, useContext } from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { SigninForm } from "../components";
import { useNavigate } from "react-router-dom";

import { FirebaseContext } from "../context/firebase";

import * as ROUTES from "../constants/routes";

export default function Signin() {
  const { firebase } = useContext(FirebaseContext);

  // USENAVIGATE
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "" ? false : true;
  const handleSignin = (e) => {
    e.preventDefault();

    // firebase post functionality
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate(ROUTES.BROWSE);
      })
      .catch((err) => {
        setEmail("");
        setPassword("");
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <SigninForm>
          <SigninForm.Title>Sign In</SigninForm.Title>
          {error && <SigninForm.Error>{error}</SigninForm.Error>}
          <SigninForm.Base onSubmit={handleSignin} method="POST">
            <SigninForm.Input
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <SigninForm.Input
              placeholder="Password"
              value={password}
              autoComplete="off"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <SigninForm.Submit disabled={!isInvalid} type="submit">
              Sign In
            </SigninForm.Submit>
          </SigninForm.Base>

          <SigninForm.Text>
            New to Netflix?{" "}
            <SigninForm.Link to={ROUTES.SIGN_UP}>Sign up now.</SigninForm.Link>
          </SigninForm.Text>
          <SigninForm.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot.
          </SigninForm.TextSmall>
        </SigninForm>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
