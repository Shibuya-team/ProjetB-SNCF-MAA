import React from "react";
import "../LandingPage/Accordeon.css";
import styled from "styled-components";
import ButtonStyle from "../ButtonStyle";
import Datepicker from "./DatePicker";
import CardList from "./CardList";
import Departure from "./Departure";
import Arrival from "./Arrival";

// const StyledInput = styled.input`
// line-height:  1.2em ;
// width: 250px;
// border-top: none;
// border-left: none;
// border-right: none;
// border-bottom: 1px solid #6767AD;
// font-size: 1.3em;
// outline: none;
// padding:20px;
// margin:10px;
// background: rgba(255, 255, 255, 0);
// color: #241F5D;
// ::placeholder{
//     color:#6767AD;
// }

// `;

const color = {
  grey: "#EBE8E8",
  oldpink: "#F0DBD8",
  salmon: "#FFCAB8",
  gold: "#F9C153",
  purple: "#241F5D",
  velvet: "#5353A2",
  plum: "#6767AD",
  emerald: "#78C4D2",
  turquoise: "#7ED0DF",
  asura: "#94DAD5",
  orange: "#FF8B66",
  brick: "#EB5933",
  white: "#FFFFFF"
};

const size = {
  small: "30px",
  medium: "50px",
  large: "200px",
  xlarge: "300px"
};

const Container = styled.div`
  .gm-ui-hover-effect {
    opacity: 0;
  }
`;

function FormTravel() {
  return (
    <>
      <Container>
        <Departure />
        <Arrival />
        <Datepicker />
        <ButtonStyle label="VALIDER" />
        <CardList />
      </Container>
    </>
  );
}

export default FormTravel;
