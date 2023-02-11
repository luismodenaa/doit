import { Dispatch, SetStateAction, useState } from "react";
import { Modal } from "react-native";
import {
  BtnClose,
  IconClose,
  IconLogout,
  LogoutPressable,
  ModalView,
  TextLogout,
  TextLogout2,
  TextsView,
  UserCloseView,
  Username,
} from "./style";

interface IModalLogoutProps {
  stateModal: boolean;
  openModalLogout: Dispatch<SetStateAction<boolean>>;
}

export const ModalLogout = ({
  stateModal,
  openModalLogout,
}: IModalLogoutProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={stateModal}
      onRequestClose={() => openModalLogout(!stateModal)}
    >
      <ModalView>
        <UserCloseView>
          <Username>Modena Usuário</Username>
          <BtnClose onPress={() => openModalLogout(!stateModal)}>
            <IconClose name="times" />
          </BtnClose>
        </UserCloseView>
        <LogoutPressable>
          <IconLogout name="sign-out" />
          <TextsView>
            <TextLogout>Sair da minha conta</TextLogout>
            <TextLogout2>Sair da minha conta agora</TextLogout2>
          </TextsView>
        </LogoutPressable>
      </ModalView>
    </Modal>
  );
};
