import React from "react";
import {
  GoogleMapProvider,
  MapBox,
  Marker,
  Polyline,
  OverlayView,
  InfoWindow
  // StandaloneAutocomplete
} from "@googlemap-react/core";
import Taxi from "../../images/icones/Mapicones/Taxi";
import CoDriving from "../../images/icones/Mapicones/CoDriving";
// import styled from "styled-components";
import secrets from "../../secrets";
import useGlobal from "../../global-state-management/store";

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

export const ItineraryMap = props => {
  const [center, itineraryMapActions] = useGlobal(
    state => state.itineraryMap.center,
    actions => actions.itineraryMapActions
  );
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
      <GoogleMapProvider>
        <MapBox
          apiKey={secrets.apiKey}
          regionParam="FR"
          languageParam="FR"
          opts={{
            center,
            zoom: 12
          }}
          style={{
            height: "70vh",
            width: "100%",
            margin: "0"
          }}
          useDrawing
          useGeometry
          usePlaces
          useVisualization
          useGoogleAPI
          onCenterChanged={() => {
            console.log("The center of the map has changed.");
          }}
        />
        <Marker
          id="marker"
          opts={{
            draggable: false,
            label: "Départ",
            position: {
              lat: itineraryDeparture.lat,
              lng: itineraryDeparture.lng
            }
          }}
        />
        <Marker
          id="marker2"
          opts={{
            draggable: false,
            label: "Arrivée",
            position: { lat: itineraryArrival.lat, lng: itineraryArrival.lng }
          }}
        />
        <InfoWindow anchorId="marker" opts={{}} visible>
          <button
            onClick={() => {
              alert("trouvez les taxis");
            }}
          >
            <CoDriving size={size.small} color={color.purple} /> <h2>42€</h2>
          </button>
        </InfoWindow>
        <Polyline
          id="polyline"
          opts={{
            path: [
              { lat: itineraryDeparture.lat, lng: itineraryDeparture.lng },
              { lat: itineraryArrival.lat, lng: itineraryArrival.lng }
            ],
            strokeColor: "orange"
          }}
        />
        <OverlayView position={{ lat: 48.91, lng: 2.3667 }}>
          <Taxi size={size.medium} color={color.purple} />
          <h2>48€</h2> */}
        </OverlayView>
      </GoogleMapProvider>
    </>
  );
};
export default ItineraryMap;
