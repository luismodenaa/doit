import { Image } from "react-native";
import { Logo, Container } from "../HeadLogin/style";
import {
  ContainerInfo,
  ContainerLogoBtn,
  ContainerTexts,
  ContainerTexts2,
  ImgBack,
  ImgHead,
  Info,
  PressableBackBtn,
  Texts,
  TitleInfo,
} from "./style";
import { useNavigate } from "react-router-native";

const logo = require("../../../assets/images/logo.png");
const agilidade = require("../../../assets/images/agilidade.png");
const simplicidade = require("../../../assets/images/simplicidade.png");
const back = require("../../../assets/images/back.png");

export const HeadRegister = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ContainerLogoBtn>
        <Logo source={logo} />

        <PressableBackBtn onPress={() => navigate("/")}>
          <ImgBack source={back} />
        </PressableBackBtn>
      </ContainerLogoBtn>
      <ContainerInfo>
        <ContainerTexts>
          <ImgHead source={agilidade} />
          <Texts>
            <TitleInfo>Agilidade</TitleInfo>
            <Info>Agilize seus projetos com rapidez e muita performance</Info>
          </Texts>
        </ContainerTexts>
        <ContainerTexts2>
          <ImgHead source={simplicidade} />
          <Texts>
            <TitleInfo>Simplicidade</TitleInfo>
            <Info>Armazene seus projetos em uma interface altamente usual</Info>
          </Texts>
        </ContainerTexts2>
      </ContainerInfo>
    </Container>
  );
};
