import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
`;

export const Title = styled.h1`
  color: white;
  max-width: 880px;
  font-size: 4rem;
  font-weight: bold;
  margin: auto;

  @media screen and (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 1.625rem;
  font-weight: normal;
  margin: 16px auto -16px auto;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
