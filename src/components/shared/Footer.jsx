import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #2373c3;
  color: #e2eaf1;
  padding: 40px 20px;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 10px 0;
`;

const SocialIcons = styled.div`
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  margin: 0 10px;
  color: #d4dee9;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: #485a6e;
  }
`;

const ExclusiveFooter = () => {
  return (
    <FooterContainer>
      <FooterText>© 2023 MyEcommerce. All rights reserved.</FooterText>
      <SocialIcons>
        <SocialIcon href="#" target="_blank">
          <i className="fab fa-facebook"></i>
          facebook
        </SocialIcon>
        <SocialIcon href="#" target="_blank">
          <i className="fab fa-twitter"></i>
          Twiter
        </SocialIcon>
        <SocialIcon href="#" target="_blank">
          <i className="fab fa-instagram"></i>
          Instagram
        </SocialIcon>
        <SocialIcon href="#" target="_blank">
          <i className="fab fa-linkedin"></i>
          LinkDin
        </SocialIcon>
      </SocialIcons>
    </FooterContainer>
  );
};

export default ExclusiveFooter;
