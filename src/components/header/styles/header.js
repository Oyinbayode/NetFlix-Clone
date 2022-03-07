import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Background = styled.div``;
export const Frame = styled.div``;
export const Container = styled.div``;
export const Logo = styled.img``;
export const ButtonLink = styled(Link)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }
`;
