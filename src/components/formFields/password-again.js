import { LabelWrapper } from "../main.styles";
export default function PasswordAgain({ setPasswordAgain, passwordAgain }) {
  return (
    <LabelWrapper htmlFor="password">
      <span>Confirm Password </span>
      <input
        type="password"
        id="password-again"
        aria-label="password-again"
        autoComplete="off"
        onChange={({ target }) => setPasswordAgain(target.value)}
        value={passwordAgain}
      />
    </LabelWrapper>
  );
}
