import { useState } from "react";
import { LabelWrapper, FloatingText } from "../main.styles";
export default function Phone() {
  const [isFloat, setIsFloat] = useState(false);
  return (
    <LabelWrapper htmlFor="phone">
      <span>
        Phone{" "}
        {isFloat && (
          <FloatingText>
            {" "}
            We strongly recommend adding a phone number. This will help verify
            your account and keep it safe.{" "}
          </FloatingText>
        )}
      </span>
      <input
        type="text"
        id="phone"
        aria-label="phone"
        autoComplete="off"
        onFocus={(e) => {
          setIsFloat(true);
        }}
        onBlur={(e) => {
          setIsFloat(false);
        }}
      />

      <p>Standard call, message, or data rates may apply.</p>
    </LabelWrapper>
  );
}
