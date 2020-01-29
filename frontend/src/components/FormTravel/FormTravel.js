import React from "react";
import "../LandingPage/Accordeon.css";
import styled from "styled-components";
import Datepicker from "./DatePicker";
import CardList from "./CardList";
import Departure from "./Departure";
import Arrival from "./Arrival";
import Valid from "./Valid";
import ItineraryMap from "../ItineraryMap/ItineraryMap";
import useGlobal from "../../global-state-management/store";

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
  const [itineraryArrival, arrivalActions] = useGlobal(
    state => state.itinerary.arrival,
    actions => actions.arrivalActions
  );
  const [itineraryDeparture, departureActions] = useGlobal(
    state => state.itinerary.departure,
    actions => actions.departureActions
  );
  return (
    <>
      <Container>
        <Departure />
        <Arrival />
        <Datepicker />
        <Valid />
        {itineraryDeparture.lat !== 0 && itineraryArrival.lat !== 0 ? (
          <>
            <ItineraryMap />
            <CardList />
          </>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}

export default FormTravel;
