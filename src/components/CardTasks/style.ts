import { Pressable, Text, View } from "react-native";
import styled from "styled-components";
import Icons from "react-native-vector-icons/FontAwesome";
import { color } from "../../styles/colors";

export const ViewCard = styled(View)`
  border: 2px solid ${color.colorBackgroundInput};
  border-radius: 5px;
  padding: 10px 6px;
  margin-bottom: 15px;
`;

export const ViewNameAndIcons = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleTask = styled(Text)`
  font-weight: 700;
  font-size: 16px;
  color: ${color.colorTitle};
`;

export const ViewIcons = styled(View)`
  flex-direction: row;
`;

export const PressableIcons = styled<any>(Pressable)`
  border: 1px solid ${color.colorPlaceholder};
  border-radius: 5px;
  padding: 6px;
  margin: 0 8px;
  background-color: ${({ finished }: any) =>
    finished ? `${color.colorPrimaryTwo}` : "transparent"};
`;

export const PressableIconsTrash = styled(Pressable)`
  border: 1px solid ${color.colorPlaceholder};
  border-radius: 5px;
  padding: 6px 9px;
  margin: 0 8px;
`;

export const IconStyled = styled<any>(Icons)`
  font-size: 18px;
  color: ${({ finished }: any) =>
    finished ? `${color.colorBaseDefault}` : `${color.colorPlaceholder}`};
`;

export const ContentTask = styled(Text)`
  color: ${color.colorText};
  margin: 35px 0;
`;

export const ProgressBar = styled(View)`
  position: relative;
  overflow: hidden;
  height: 10px;
  border-radius: 4px;
  background-color: #eee;
`;

export const ProgressLoading: any = styled(View)`
  height: 100%;
  width: ${({ progress }: any) => `${progress}%`};
  background-color: ${color.colorPrimaryTwo};
  transition: 1s;
`;
