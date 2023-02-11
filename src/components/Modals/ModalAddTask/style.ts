import { Pressable, Text, TextInput, View } from "react-native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";
import { color } from "../../../styles/colors";

export const HeaderModal = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const HeaderInfo = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100px;
`;

export const IconInfo = styled(Icon)`
  padding: 6px;
  border-radius: 5px;
  color: ${color.colorBaseDefault};
  background-color: ${color.colorPrimary};
`;

export const TitleInfo = styled(Text)`
  font-weight: 700;
  font-size: 16px;
`;

export const BtnClose = styled(Pressable)`
  background-color: ${color.colorError};
  padding: 6px;
  border-radius: 5px;
`;

export const IconClose = styled(Icon)`
  color: ${color.colorBaseDefault};
`;

export const Input = styled<any>(TextInput)`
  background-color: ${color.colorBackgroundInput};
  border-radius: 8px;
  padding: 10px 10px;
  width: 320px;
  border: ${({ status, contains }: any) =>
    status
      ? `2px solid ${color.colorError}`
      : contains
      ? `2px solid ${color.colorSecondary}`
      : "none"};
`;
