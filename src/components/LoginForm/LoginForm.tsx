import { Text, TextInput, View, Button } from "react-native";
import {
  BoxLogin,
  BtnText,
  BtnTextRegister,
  Container,
  ContainerRegister,
  Form,
  IconStyled,
  IconStyledPass,
  Input,
  LabelForm,
  MsgError,
  PressableBtnRegister,
  PressableBtnSubmit,
  TextNotAccount,
  TitleLogin,
} from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/loginSchema";

interface iFormLogin {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(true);

  const navigate = useNavigate();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLogin>({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const [containsEmail, setContainsEmail] = useState(false);
  const [containsPassword, setContainsPassword] = useState(false);

  return (
    <Container>
      <BoxLogin>
        <TitleLogin>Bem vindo de volta!</TitleLogin>
        <Form>
          <View>
            <LabelForm>E-mail</LabelForm>
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
            <BtnText>Entrar</BtnText>
          </PressableBtnSubmit>
        </Form>
        <ContainerRegister>
          <TextNotAccount>Ainda não possui uma conta?</TextNotAccount>
        </ContainerRegister>
        <PressableBtnRegister onPress={() => navigate("/register")}>
          <BtnTextRegister>Cadastrar</BtnTextRegister>
        </PressableBtnRegister>
      </BoxLogin>
    </Container>
  );
};
