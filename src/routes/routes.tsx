import { NativeRouter, Route, Routes } from "react-router-native";
import { Dashboardpage } from "../pages/Dashboardpage/Dashboardpage";
import { Homepage } from "../pages/Homepage/Homepage";
import { Registerpage } from "../pages/Registerpage/Registerpage";

export const RoutesMain = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Dashboardpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/dashboard" element={<Dashboardpage />} />
      </Routes>
    </NativeRouter>
  );
};
