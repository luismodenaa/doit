import { HeadLogin } from "../../components/HeadLogin/HeadLogin";
import { HeadPages } from "../../components/HeadPages/HeadPages";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { color } from "../../styles/colors";

export const Homepage = () => {
  return (
    <>
      <HeadPages headColor={`${color.colorSecondary}`} />
      <HeadLogin />
      <LoginForm />
    </>
  );
};
