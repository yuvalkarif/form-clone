import styled, { keyframes } from "styled-components";
import { bounceIn, fadeInRight, merge } from "react-animations";
const bounceFade = merge(bounceIn, fadeInRight);
const bounceFadeAnimation = keyframes`${bounceFade}`;
const bounceAnimation = keyframes`${bounceIn}`;
const fadeAnimation = keyframes`${fadeInRight}`;
const opacityFade = keyframes`

33%{
  opacity:0;
}

100%{
  opacity:1;
}
`;

export const Wrapper = styled.div``;

export const Title = styled.header`
  display: flex;
  justify-content: center;
  font-family: "Yeseva One", cursive;
  font-size: 2.5rem;
  color: var(--mediumerGrey);
  letter-spacing: 0.5px;
  font-weight: 600;
  margin-top: 1rem;
  animation: 3s ${bounceAnimation};
  ::after {
    content: ".";
    color: var(--mediumerGrey);
    font-weight: 500;
  }
`;

export const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1.5rem;
`;

export const Logo = styled.img`
  width: 16px;
  margin-right: 0.25rem;
`;
export const SubTitle = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 3s ${fadeAnimation}, 3s ${opacityFade} ease-out;
  margin-bottom: 0.5rem;

  padding-right: 1rem;
  a {
    font-weight: 400;
    color: var(--darkGrey);
    text-decoration: none;
  }
`;
