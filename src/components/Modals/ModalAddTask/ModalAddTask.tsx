import { Dispatch, SetStateAction, useState } from "react";
import { Text, View } from "react-native";
import {
  BtnText,
  LabelForm,
  MsgError,
  PressableBtnSubmit,
} from "../../LoginForm/style";
import { ModalView } from "../ModalLogout/style";
import {
  BtnClose,
  HeaderInfo,
  HeaderModal,
  IconClose,
  IconInfo,
  Input,
  TitleInfo,
} from "./style";
import { useForm } from "react-hook-form";
import Modal from "react-native-modal";

interface IFormAddTask {
  title: string;
  description: string;
}

interface IModalAddTaskProps {
  stateModal: boolean;
  openModalAddTask: Dispatch<SetStateAction<boolean>>;
}

export const ModalAddTask = ({
  stateModal,
  openModalAddTask,
}: IModalAddTaskProps) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormAddTask>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Modal
      isVisible={stateModal}
      onBackButtonPress={() => openModalAddTask(!stateModal)}
    >
      <ModalView>
        <HeaderModal>
          <HeaderInfo>
            <IconInfo name="file-text-o" />
            <TitleInfo>Adicionar</TitleInfo>
          </HeaderInfo>
          <BtnClose onPress={() => openModalAddTask(!stateModal)}>
            <IconClose name="close" />
          </BtnClose>
        </HeaderModal>
        <View>
          <LabelForm>Título</LabelForm>
          <Input
            keyboardType="email-address"
            placeholder="Digite o título"
            onChangeText={(text: string) => {
              setValue("title", text);
            }}
            status={errors.title}
          />
          <MsgError>{errors.title?.message}</MsgError>
        </View>
        <View>
          <LabelForm>Descrição</LabelForm>
          <Input
            keyboardType="email-address"
            placeholder="Digite a descrição"
            multiline={true}
            numberOfLines={2}
            onChangeText={(text: string) => {
              setValue("description", text);
            }}
            status={errors.description}
          />
          <MsgError>{errors.description?.message}</MsgError>
        </View>

        <PressableBtnSubmit onPress={handleSubmit(onSubmit)}>
          <BtnText>Adicionar Tarefa</BtnText>
        </PressableBtnSubmit>
      </ModalView>
    </Modal>
  );
};
