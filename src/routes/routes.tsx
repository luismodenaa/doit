import { NativeRouter, Route, Routes } from "react-router-native";
import { Homepage } from "../pages/Homepage/Homepage";
import { Registerpage } from "../pages/Registerpage/Registerpage";

export const RoutesMain = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Registerpage />} />
      </Routes>
    </NativeRouter>
  );
};
