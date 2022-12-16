import { Pressable, Text, View } from "react-native";
import styled from "styled-components";
import { color } from "../../styles/colors";

export const PressableBtnSubmit = styled(Pressable)`
  background-color: ${color.colorSecondary};
  padding: 14px 0;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

export const TextBtn = styled(Text)`
  color: ${color.colorBaseDefault};
  font-weight: 600;
  font-size: 18px;
`;

export const FormRegister = styled(View)`
  margin-top: 5px;
`;
