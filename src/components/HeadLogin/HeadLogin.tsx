import { Container, ContainerText, Logo, TextOne, TextTwo } from "./style";

const logo = require("../../../assets/images/logo.png");

export const HeadLogin = () => {
  return (
    <Container>
      <Logo source={logo}></Logo>
      <ContainerText>
        <TextOne>O jeito fácil, grátis</TextOne>
        <TextTwo>flexível e atrativo de gerencar suas tarefas</TextTwo>
      </ContainerText>
    </Container>
  );
};
