import { SafeAreaView, ScrollView, View } from "react-native";
import {
  BoxLogin,
  Container,
  Form,
  IconStyled,
  IconStyledPass,
  Input,
  LabelForm,
  MsgError,
  TitleLogin,
} from "../LoginForm/style";
import { FormRegister, PressableBtnSubmit, TextBtn } from "./style";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schemas/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas/registerSchema";

interface iFormLogin {
  name: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(true);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLogin>({ resolver: yupResolver(registerSchema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const [containsName, setContainsName] = useState(false);
  const [containsEmail, setContainsEmail] = useState(false);
  const [containsPassword, setContainsPassword] = useState(false);
  return (
    <Container>
      <BoxLogin>
        <TitleLogin>Crie sua conta</TitleLogin>
        <FormRegister>
          <View>
            <LabelForm>Nome</LabelForm>
            <Input
              keyboardType="default"
              placeholder="Digite seu nome"
              onChangeText={(text: string) => {
                setValue("name", text);
                text ? setContainsName(true) : setContainsName(false);
              }}
              status={errors.name}
              contains={containsName}
            />
            <IconStyled name="user" contains={containsName} />
            <MsgError>{errors.name?.message}</MsgError>
          </View>
          <View>
            <LabelForm>Email</LabelForm>
            <Input
              keyboardType="email-address"
              placeholder="Digite seu email"
              onChangeText={(text: string) => {
                setValue("email", text);
                text ? setContainsEmail(true) : setContainsEmail(false);
              }}
              status={errors.email}
              contains={containsEmail}
            />
            <IconStyled name="envelope" contains={containsEmail} />
            <MsgError>{errors.email?.message}</MsgError>
          </View>
          <View>
            <LabelForm>Senha</LabelForm>
            <Input
              placeholder="Digite sua senha"
              secureTextEntry={showPassword}
              onChangeText={(text: string) => {
                setValue("password", text);
                text ? setContainsPassword(true) : setContainsPassword(false);
              }}
              status={errors.password}
              contains={containsPassword}
            />
            <IconStyled name="lock" contains={containsPassword} />
            {showPassword ? (
              <IconStyledPass
                onPress={() => setShowPassword(false)}
                name="eye-slash"
              />
            ) : (
              <IconStyledPass
                onPress={() => setShowPassword(true)}
                name="eye"
              />
            )}
            <MsgError>{errors.password?.message}</MsgError>
          </View>
          <PressableBtnSubmit onPress={handleSubmit(onSubmit)}>
            <TextBtn>Finalizar Cadastro</TextBtn>
          </PressableBtnSubmit>
        </FormRegister>
      </BoxLogin>
    </Container>
  );
};
