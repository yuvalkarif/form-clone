import { useState } from "react";
import { LabelWrapper, FloatingText } from "../main.styles";
export default function Password({ setPassword, password }) {
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
        onChange={({ target }) => setPassword(target.value)}
        value={password}
      />
    </LabelWrapper>
  );
}
