import styled from "styled-components";

export const Banner = styled.div`
  background: ${(props) => `${props.backgroundImage}`};
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 0;
  color: black;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.5rem;
`;
