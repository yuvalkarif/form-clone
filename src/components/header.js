import {
  Logo,
  LogoDiv,
  ProfileDiv,
  SearchDiv,
  SubTitle,
  Title,
  Wrapper,
} from "./header.styles";
import LogoSrc from "../images/logo.png";
export default function Header() {
  return (
    <Wrapper>
      <Title>karif</Title>
      <SubTitle>
        {" "}
        <Logo src={LogoSrc} />
        <a href="https://yuvalkarif3.github.io/web-replica/">karifgram</a>
      </SubTitle>
    </Wrapper>
  );
}
