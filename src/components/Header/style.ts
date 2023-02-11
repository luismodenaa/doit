import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components";
import { color } from "../../styles/colors";

export const ContainerHeader = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerLogo = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled(Image)`
  width: 50px;
  height: 50px;
`;

export const Title = styled(Text)`
  font-weight: 700;
  margin-left: 5px;
`;

export const IconDashboard = styled(Image)`
  height: 28px;
  width: 28px;
`;
