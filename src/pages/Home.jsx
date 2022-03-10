import React from "react";
import { OptForm, Feature } from "../components";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import JumbotronContainer from "../containers/jumbotron";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more</Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time
          </Feature.SubTitle>
        </Feature>
        <OptForm>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership
          </OptForm.Text>
          <OptForm.Break />
          <OptForm.Input placeholder="Email Address" />
          <OptForm.Button>Get Started</OptForm.Button>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
