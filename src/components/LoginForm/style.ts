import { Button, Pressable, Text, TextInput, View } from "react-native";
import styled from "styled-components";
import { color } from "../../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";

interface iInputProps {
  status: boolean;
}

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BoxLogin = styled(View)`
  position: absolute;
  bottom: 0;
  background-color: ${color.colorBaseDefault};
  padding: 30px 14px;
  border-radius: 5px;
  border: 2px solid ${color.colorBackgroundInput};
`;

export const TitleLogin = styled(Text)`
  color: ${color.colorTitle};
  font-size: 24px;
  font-weight: 700;
`;

export const Form = styled(View)`
  margin-top: 50px;
`;

export const LabelForm = styled(Text)`
  color: ${color.colorText};
  font-size: 14px;
  font-weight: 400;
`;

export const IconStyled = styled<any>(Icon)`
  position: absolute;
  padding: 35px 15px;
  font-size: 18px;
  color: ${({ contains }: any) =>
    contains ? `${color.colorSecondary}` : `${color.colorPlaceholder};`};
`;

export const IconStyledPass = styled(Icon)`
  position: absolute;
  padding: 35px 15px;
  font-size: 18px;
  right: 0;
  color: ${color.colorPlaceholder};
`;

export const Input = styled<any>(TextInput)`
  background-color: ${color.colorBackgroundInput};
  border-radius: 8px;
  padding: 10px 44px;
  width: 320px;
  border: ${({ status, contains }: any) =>
    status
      ? `2px solid ${color.colorError}`
      : contains
      ? `2px solid ${color.colorSecondary}`
      : "none"};
`;

export const MsgError = styled(Text)`
  color: ${color.colorError};
  font-size: 12px;
  margin: 10px 0;
`;

export const PressableBtnSubmit = styled(Pressable)`
  background-color: ${color.colorPrimary};
  padding: 14px 0;
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-top: 10px;
`;

export const BtnText = styled(Text)`
  color: ${color.colorBaseDefault};
  font-weight: 600;
  font-size: 18px;
`;

export const ContainerRegister = styled(View)`
  margin-top: 30px;
  align-items: center;
  margin-bottom: 10px;
`;

export const TextNotAccount = styled(Text)`
  color: ${color.colorText};
  font-size: 14px;
  font-weight: 400;
`;

export const PressableBtnRegister = styled(Pressable)`
  background-color: #f3e8fc;
  padding: 14px 0;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

export const BtnTextRegister = styled(Text)`
  color: ${color.colorPlaceholder};
  font-size: 18px;
  font-weight: 600;
`;
