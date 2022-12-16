import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});
