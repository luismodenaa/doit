import { HeadPages } from "../../components/HeadPages/HeadPages";
import { HeadRegister } from "../../components/HeadRegister/HeadRegister";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { color } from "../../styles/colors";

export const Registerpage = () => {
  return (
    <>
      <HeadPages headColor={`${color.colorSecondary}`} />
      <HeadRegister />
      <RegisterForm />
    </>
  );
};
