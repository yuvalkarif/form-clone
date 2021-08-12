import styled from "styled-components";
export const Wrapper = styled.div`
  background-color: var(--darkGrey);
  width: 100vw;
  height: 56px;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
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
