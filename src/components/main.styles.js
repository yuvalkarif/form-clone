import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  background-color: var(--whiteGrey);
  padding: 2rem 2rem;
  width: 318px;
  border-radius: 2px;
  border: 1px solid var(--mediumGrey);

  h1 {
    text-align: center;
    font: inherit;
    font-size: 1.5rem;
    color: var(--darkGrey);
    margin: 0;
  }
  h2 {
    text-align: center;
    font: inherit;
    font-size: 0.8rem;
    color: var(--mediumerGrey);
    margin-top: 0.85rem;
    margin-bottom: 0;
  }
  a {
    text-align: center;
    font: inherit;
    font-size: 0.8rem;
    color: var(--mediumerGrey);
    margin-top: 0.1rem;
    margin-bottom: 1rem;
    text-decoration: none;
    color: var(--solidBlue);
  }

  .passCheck {
    margin: 0;
    margin-bottom: 1.5rem;
    .valid {
      color: #86d154;
    }
    .invalid {
      color: #e8321e;
    }
    li {
      svg {
        width: 12px;
        height: 12px;
        margin-right: 0.55rem;
      }

      span {
        font-size: 0.8rem;
      }
    }
  }
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
    position: relative;
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

export const FloatingText = styled.div`
  font-family: inherit;
  background-color: var(--darkestGrey);
  color: var(--mediumGrey);
  position: absolute;
  right: -73%;
  top: 130%;
  font-size: 0.75rem;
  padding: 0.65rem 1.35rem;
  border-radius: 5px;
  opacity: 90%;
  text-align: left;
  width: 172px;
`;

export const SubmitButton = styled.button`
  padding: 0.65rem 1.35rem;
  background-color: var(--darkBlue);
  color: var(--whiteGrey);
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-family: inherit;
  font-weight: 400;
  box-shadow: 0 1px 2px 0px var(--darkestGrey);
  cursor: pointer;
`;

export const BottomText = styled.div`
  font-size: 0.8rem;
  text-align: center;
  font-style: oblique;
  margin-top: 1rem;
  color: var(--mediumerGrey);
  a {
    text-decoration: none;
    color: var(--solidBlue);
  }
`;
