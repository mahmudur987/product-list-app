import React from "react";
import Header from "../components/shared/Header";
import { Outlet } from "react-router-dom";
import { MainContainer } from "../Styles/Global";
import ExclusiveFooter from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <MainContainer>
      <Header />
      <Outlet />
      <ExclusiveFooter />
    </MainContainer>
  );
};

export default MainLayout;
