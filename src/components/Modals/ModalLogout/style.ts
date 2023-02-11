import { Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components";
import { color } from "../../../styles/colors";

export const ModalView = styled(View)`
  padding: 10px;
  margin: 10px;
  background-color: ${color.colorBaseDefault};
  border: 1px solid ${color.colorBackgroundInput};
  border-radius: 8px;
  margin-top: 42px;
`;

export const Username = styled(Text)`
  color: ${color.colorText};
  font-weight: 700;
`;

export const LogoutPressable = styled(Pressable)`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  flex-direction: row;
`;

export const IconLogout = styled(Icon)`
  background-color: ${color.colorError};
  font-size: 25px;
  padding: 14px;
  border-radius: 5px;
  color: ${color.colorBaseDefault};
`;

export const TextsView = styled(View)`
  margin-left: 20px;
`;

export const TextLogout = styled(Text)`
  font-weight: 700;
  font-size: 20px;
`;

export const TextLogout2 = styled(Text)`
  color: ${color.colorPlaceholder};
`;

export const UserCloseView = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BtnClose = styled(Pressable)`
  padding: 2px;
`;

export const IconClose = styled(Icon)`
  font-size: 16px;
  color: ${color.colorText};
`;
