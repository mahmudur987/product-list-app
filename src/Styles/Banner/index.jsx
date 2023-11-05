import styled from "styled-components";

export const Banner = styled.div`
  background: ${(props) => `${props.backgroundImage}`};
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 0;
  color: black;
  @keyframes slideFromTop {
    0% {
      transform: translateY(-100%); /* Start position above the viewport */
    }
    100% {
      transform: translateY(0);
    }
  }

  animation: slideFromTop 1s ease-out;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeIn 5s ease-in-out;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeIn 5s ease-in-out;
`;
