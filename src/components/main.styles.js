import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  background-color: var(--whiteGrey);
  padding: 2rem 2rem;
  width: 318px;
  border-radius: 2px;
  border: 1px solid var(--mediumGrey);
  position: relative;
`;

export const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  span {
    font-weight: 400;
    font-size: 0.85rem;
    margin-bottom: 0.35rem;
    color: var(--darkGrey);
    span {
      color: var(--darkGrey);
      opacity: 0.5;
    }
  }
  input {
    border: 1px solid var(--mediumGrey);
    border-radius: 3px;
    padding: 0.3rem 0.5rem;
    &:focus {
      box-shadow: 0px 0px 10px 2px var(--glowBlue);
      outline: none;
      border: 1px solid var(--solidBlue);
    }
  }
  p {
    font-size: 0.6rem;
    margin: 0;
    margin-top: 0.35rem;
    opacity: 0.7;
  }
`;

export const FloatingTextEmail = styled.div`
  background-color: var(--darkestGrey);
  color: var(--mediumGrey);
  position: absolute;
  right: -52%;
  top: 12.75%;
  font-size: 0.75rem;
  padding: 0.65rem 1.35rem;
  border-radius: 5px;
  opacity: 90%;
  text-align: left;
  width: 172px;
`;
export const FloatingTextPhone = styled.div`
  background-color: var(--darkestGrey);
  color: var(--mediumGrey);
  position: absolute;
  right: -52%;
  top: 31.75%;
  font-size: 0.75rem;
  padding: 0.65rem 1.35rem;
  border-radius: 5px;
  opacity: 90%;
  text-align: left;
  width: 172px;
`;

export const FloatingTextPassword = styled.div`
  background-color: var(--darkestGrey);
  color: var(--mediumGrey);
  position: absolute;
  right: -52%;
  top: 54.75%;
  font-size: 0.75rem;
  padding: 0.65rem 1.35rem;
  border-radius: 5px;
  opacity: 90%;
  text-align: left;
  width: 172px;
`;
