import { useState } from "react";
import { LabelWrapper, FloatingText } from "../main.styles";
export default function Password() {
  const [isFloat, setIsFloat] = useState(false);
  return (
    <LabelWrapper htmlFor="password">
      <span>
        Password{" "}
        {isFloat && (
          <FloatingText>
            Create a password you've never used before. this will help keep your
            account safe.
          </FloatingText>
        )}
      </span>
      <input
        type="password"
        id="password"
        aria-label="password"
        autoComplete="off"
        onFocus={(e) => {
          setIsFloat(true);
        }}
        onBlur={(e) => {
          setIsFloat(false);
        }}
      />
    </LabelWrapper>
  );
}

<LabelWrapper htmlFor="password">
  <span>Password</span>
  <input
    type="password"
    id="password"
    aria-label="password"
    autoComplete="off"
  />
</LabelWrapper>;
