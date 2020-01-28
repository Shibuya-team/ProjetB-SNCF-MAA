import React from "react";
import "../LandingPage/Accordeon.css";
import styled from "styled-components";
import Datepicker from "./DatePicker";
import CardList from "./CardList";
import Departure from "./Departure";
import Arrival from "./Arrival";
import Valid from "./Valid";

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
        <Valid />
        <CardList />
      </Container>
    </>
  );
}

export default FormTravel;
