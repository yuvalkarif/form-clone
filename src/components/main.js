import {
  LabelWrapper,
  Wrapper,
  FloatingTextEmail,
  FloatingTextPhone,
  FloatingTextPassword,
} from "./main.styles";

export default function Main() {
  return (
    <Wrapper>
      <LabelWrapper htmlFor="email">
        <span>Email adress</span>
        <input
          type="email"
          id="email"
          aria-label="email"
          autoComplete="off"
          onFocus={() => {
            return (
              <FloatingTextEmail>
                {" "}
                You'll use this as your user ID
              </FloatingTextEmail>
            );
          }}
        />
      </LabelWrapper>
      <LabelWrapper htmlFor="phone">
        <span>
          Phone <span>{"(recommended)"}</span>
        </span>
        <input type="text" id="phone" aria-label="phone" autoComplete="off" />
        <FloatingTextPhone>
          {" "}
          We strongly recommend adding a phone number. This will help verify
          your account and keep it safe.{" "}
        </FloatingTextPhone>
        <p>Standard call, message, or data rates may apply.</p>
      </LabelWrapper>
      <LabelWrapper htmlFor="password">
        <span>Password</span>
        <input
          type="password"
          id="password"
          aria-label="password"
          autoComplete="off"
        />
      </LabelWrapper>
      <LabelWrapper htmlFor="c-password">
        <span>Confirm password</span>
        <input
          type="password"
          id="c-password"
          aria-label="c-password"
          autoComplete="off"
        />
        <FloatingTextPassword>
          Create a password you've never used before. this will help keep your
          account safe.
        </FloatingTextPassword>
      </LabelWrapper>
      <button type="submit">Create Account </button>
    </Wrapper>
  );
}
