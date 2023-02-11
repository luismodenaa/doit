import { Pressable, TextInput, View } from "react-native";
import styled from "styled-components";
import { color } from "../../styles/colors";
import Icons from "react-native-vector-icons/FontAwesome";

export const ViewSearch = styled(View)`
  padding: 10% 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled(TextInput)`
  background-color: ${color.colorBackgroundInput};
  padding: 3% 10px;
  width: 84%;
  border-radius: 8px;
`;

export const PressableStyled = styled(Pressable)`
  background-color: ${color.colorPrimaryTwo};
  padding: 15px;
  border-radius: 8px;
`;

export const IconSearch = styled(Icons)`
  font-size: 18px;
  color: ${color.colorBaseDefault};
`;
