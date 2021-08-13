import { SubmitButton, FormWrapper, BottomText } from "./main.styles";

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
  const [showCheck, setShowCheck] = useState(false);

  return (
    <FormWrapper>
      <h1>Create a Karif account</h1>
      <h2>One account for everything Karif, including Karifgram.</h2>
      <a href="https://yuvalkarif3.github.io/web-replica/">Learn more</a>
      <Email emailAdress={emailAdress} setEmailAdress={setEmailAdress} />
      <Phone phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
      <Password
        setPassword={setPassword}
        password={password}
        setShowCheck={setShowCheck}
      />

      {showCheck && (
        <PasswordChecklist
          rules={["minLength", "specialChar", "number", "capital", "match"]}
          minLength={8}
          value={password}
          valueAgain={passwordAgain}
          onChange={(isValid) => {}}
          className="passCheck"
        />
      )}
      <PasswordAgain
        setPasswordAgain={setPasswordAgain}
        passwordAgain={passwordAgain}
      />
      <SubmitButton type="submit">Create Account </SubmitButton>
      <BottomText>
        By selecting Create Account, you agree to our <a href="/">Terms</a> and
        have read and acknowledge our <a href="/">Global Privacy Statement</a>.
      </BottomText>
    </FormWrapper>
  );
}
