import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});
