import { SubmitButton, Wrapper } from "./main.styles";

import { useState } from "react";

//Form Components
import Email from "./formFields/email";
import Phone from "./formFields/phone";
import Password from "./formFields/password";

export default function Main() {
  return (
    <Wrapper>
      <Email />
      <Phone />
      <Password />
      <SubmitButton type="submit">Create Account </SubmitButton>
    </Wrapper>
  );
}
