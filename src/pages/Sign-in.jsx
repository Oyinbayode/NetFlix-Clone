import React from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { SigninForm } from "../components";
import { useState } from "react";
import * as ROUTES from "../constants/routes";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "" ? false : true;
  const handleSignin = (e) => {
    e.preventDefault();

    // firebase post functionality
  };

  return (
    <>
      <HeaderContainer>
        <SigninForm>
          <SigninForm.Title>Sign In</SigninForm.Title>
          {error && <SigninForm.Error>{error}</SigninForm.Error>}
          <SigninForm.Base onSubmit={handleSignin} method="POST">
            {console.log(isInvalid)}
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
            <SigninForm.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot.
            </SigninForm.TextSmall>
          </SigninForm.Text>
        </SigninForm>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
