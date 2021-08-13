import { useState } from "react";
import { LabelWrapper, FloatingText } from "../main.styles";
export default function Email({ emailAdress, setEmailAdress }) {
  const [isFloat, setIsFloat] = useState(false);
  console.log(setEmailAdress);
  return (
    <LabelWrapper htmlFor="email">
      <span>
        Email adress{" "}
        {isFloat && (
          <FloatingText> You'll use this as your user ID</FloatingText>
        )}
      </span>
      <input
        type="email"
        id="email"
        aria-label="email"
        autoComplete="off"
        onFocus={(e) => {
          setIsFloat(true);
        }}
        onBlur={(e) => {
          setIsFloat(false);
        }}
        onChange={({ target }) => setEmailAdress(target.value)}
        value={emailAdress}
      ></input>
    </LabelWrapper>
  );
}
