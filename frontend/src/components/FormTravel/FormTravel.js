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
  );
}

export default FormTravel;
