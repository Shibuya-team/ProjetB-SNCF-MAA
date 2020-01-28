import React from "react";
import Buildings from "../../images/Buildings";
import styled from "styled-components";

const Container = styled.div`
  max-width: 2440px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  background-color: ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts[0]};
  fontsize: ${props => props.theme.fontSizes.large};
`;

function Footer() {
  return <Buildings />;
}

export default Footer;
