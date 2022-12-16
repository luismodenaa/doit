import { Image, Pressable, Text, View } from "react-native";
import styled from "styled-components";
import { color } from "../../styles/colors";

export const Container = styled(View)`
  background-color: ${color.colorSecondary};
  padding: 10% 5%;
  padding-bottom: 20%;
`;

export const Logo = styled(Image)`
  width: 120px;
  height: 80px;
`;

export const ContainerText = styled(View)`
  margin-top: 30px;
`;

export const TextOne = styled(Text)`
  font-size: 38px;
  font-weight: 800;
  color: ${color.colorBaseDefault};
`;

export const TextTwo = styled(Text)`
  font-size: 16px;
  width: 250px;
  color: ${color.colorBaseDefault};
`;
