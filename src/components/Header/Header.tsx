import { Dispatch, ReactNode, SetStateAction } from "react";
import { Pressable, View } from "react-native";
import {
  ContainerHeader,
  ContainerLogo,
  IconDashboard,
  Logo,
  Title,
} from "./style";

const logo = require("../../../assets/images/logoheader.png");
const icondashboard = require("../../../assets/images/icondashboard.png");

interface IHeaderProps {
  openModalLogout: Dispatch<SetStateAction<boolean>>;
  stateModal: boolean;
}

export const Header = ({ openModalLogout, stateModal }: IHeaderProps) => {
  return (
    <ContainerHeader>
      <ContainerLogo>
        <Logo source={logo} />
        <Title>Dashboard</Title>
      </ContainerLogo>
      <Pressable onPress={() => (!stateModal ? openModalLogout(true) : null)}>
        <IconDashboard source={icondashboard} />
      </Pressable>
    </ContainerHeader>
  );
};
