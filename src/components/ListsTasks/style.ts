import { Pressable, Text, View } from "react-native";
import styled from "styled-components";
import { color } from "../../styles/colors";

export const ContainerTasks = styled(View)`
  padding-bottom: 150%;
`;

export const PressableAddTask = styled(Pressable)`
  background-color: ${color.colorPrimary};
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 30px;
`;

export const TextAddTask = styled(Text)`
  color: ${color.colorBaseDefault};
  font-size: 18px;
  font-weight: 600;
`;
