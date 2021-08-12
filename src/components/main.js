import { SubmitButton, Wrapper } from "./main.styles";

import { useState } from "react";
import PasswordChecklist from "react-password-checklist";

//Form Components
import Email from "./formFields/email";
import Phone from "./formFields/phone";
import Password from "./formFields/password";
import PasswordAgain from "./formFields/password-again";

export default function Main() {
  const [emailAdress, setEmailAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  return (
    <Wrapper>
      <Email emailAdress={emailAdress} setEmailAdress={setEmailAdress} />
      <Phone phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
      <Password setPassword={setPassword} password={password} />

      <PasswordChecklist
        rules={["minLength", "specialChar", "number", "capital", "match"]}
        minLength={8}
        value={password}
        valueAgain={passwordAgain}
        onChange={(isValid) => {}}
        className="passCheck"
      />
      <PasswordAgain
        setPasswordAgain={setPasswordAgain}
        passwordAgain={passwordAgain}
      />
      <SubmitButton type="submit">Create Account </SubmitButton>
    </Wrapper>
  );
}
