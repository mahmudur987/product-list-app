import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Banner, Description, Heading } from "../../Styles/Banner";

const banners = [
  {
    id: 1,
    backgroundImage:
      'url("https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    heading: "Discover the Latest Trends",
    description:
      "Shop our exclusive collection of trendy products for every occasion.",
  },
  {
    id: 2,
    backgroundImage:
      'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    heading: "Quality Products, Affordable Prices",
    description:
      "Explore high-quality products at prices that fit your budget.",
  },
  {
    id: 2,
    backgroundImage:
      'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    heading: "Quality Products, Affordable Prices",
    description:
      "Explore high-quality products at prices that fit your budget.",
  },
  // Add more banner items as needed
];

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {banners.map((banner) => (
        <Banner key={banner.id} backgroundImage={banner.backgroundImage}>
          <Heading>{banner.heading}</Heading>
          <Description>{banner.description}</Description>
        </Banner>
      ))}
    </Slider>
  );
};

export default BannerSlider;
