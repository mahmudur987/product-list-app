import React from "react";
import BannerSlider from "../components/Home/Banner";
import HomeProduct from "../components/Home/HomeProduct";
import { MainContainer } from "../Styles/Global";

const Home = () => {
  return (
    <MainContainer>
      <BannerSlider />
      <HomeProduct />
    </MainContainer>
  );
};

export default Home;
