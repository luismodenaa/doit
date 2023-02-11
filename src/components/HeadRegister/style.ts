import { Image, Pressable, Text, View } from "react-native";
import styled from "styled-components";
import { color } from "../../styles/colors";

export const Logo = styled(Image)`
  width: 20%;
  height: 130%;
`;

export const ImgHead = styled(Image)`
  width: 16%;
  height: 80%;
`;

export const ContainerLogoBtn = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PressableBackBtn = styled(Pressable)`
  background-color: ${color.colorPrimary};
  padding: 3% 4%;
  border-radius: 5px;
`;

export const ImgBack = styled(Image)`
  width: 15px;
  height: 15px;
`;

export const ContainerInfo = styled(View)`
  margin-top: 10%;
`;

export const ContainerTexts = styled(View)`
  display: flex;
  flex-direction: row;
`;

export const ContainerTexts2 = styled(View)`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
`;

export const Texts = styled(View)`
  margin-left: 5%;
`;

export const TitleInfo = styled(Text)`
  color: ${color.colorBaseDefault};
  font-size: 20px;
  font-weight: 700;
`;

export const Info = styled(Text)`
  color: ${color.colorBaseDefault};
  font-size: 14px;
  font-weight: 400;
  margin-top: 2%;
  width: 60%;
`;
