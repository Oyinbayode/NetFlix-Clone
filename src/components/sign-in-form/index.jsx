import React from "react";
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from "./styles/sign-in-form";

export default function SigninForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SigninForm.Error = function SigninFormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

SigninForm.Base = function SigninFormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

SigninForm.Title = function SigninFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

SigninForm.Text = function SigninFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

SigninForm.TextSmall = function SigninFormTextSmall({
  children,
  ...restProps
}) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

SigninForm.Link = function SigninFormLink({ to, children, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

SigninForm.Input = function SigninFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

SigninForm.Submit = function SigninFormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
