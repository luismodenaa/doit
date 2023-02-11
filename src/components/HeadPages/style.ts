import { View } from "react-native";
import styled from "styled-components";

export const HeadStyled = styled<any>(View)`
  padding: 3%;
  background-color: ${({ color }: any) => `${color}`};
`;
