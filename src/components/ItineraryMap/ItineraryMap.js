import {
	GoogleMapProvider,
	MapBox,
	Marker,
	Polyline,
	OverlayView,
	InfoWindow,
	StandaloneAutocomplete,
} from "@googlemap-react/core";
import React from "react";
import Taxi from "../../images/icones/Mapicones/Taxi";
import CoDriving from "../../images/icones/Mapicones/CoDriving";
import styled from "styled-components";
import secrets from "../../secrets"
import ButtonStyle from "../ButtonStyle";
import Datepicker from '../FormTravel/DatePicker'
import CardList from '../FormTravel/CardList'





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
	white: "#FFFFFF",
	
};

const size = {
	small: "30px",
	medium: "50px",
	large: "200px",
	xlarge: "300px",
};



const Container = styled.div`
.gm-ui-hover-effect {
    opacity: 0;
}
`;

export const ItineraryMap = () => {
	return (
		<>
		<Container>
			<GoogleMapProvider >
			
			<StandaloneAutocomplete
    id="departure"
	placeholder="Adresse de départ"
	style={{lineHeight:  "1.2em" ,
		width: "250px",
		borderTop: "none",
		borderLeft: "none",
		borderRight: "none",
		borderBottom: "1px solid #6767AD",
		fontSize: "1.3em",
		outline: "none",
		padding:"20px",
		margin:"10px",
		background: "rgba(255, 255, 255, 0)",
		color: "#241F5D"}}
		

  />

  <StandaloneAutocomplete
    id="arrival"
	placeholder="Adresse d'arrivée"
	style={{lineHeight:  "1.2em" ,
		width: "250px",
		borderTop: "none",
		borderLeft: "none",
		borderRight: "none",
		borderBottom: "1px solid #6767AD",
		fontSize: "1.3em",
		outline: "none",
		padding:"20px",
		margin:"10px",
		background: "rgba(255, 255, 255, 0)",
		color: "#241F5D",
		
		
		
	}}

  />
   <Datepicker />
  <ButtonStyle label='VALIDER'/>
				<MapBox
					
					apiKey={secrets.apiKey}
					 
					regionParam="FR"
					languageParam="FR"
					opts={{
						center: { lat: 48.9333, lng: 2.3667 },
						zoom: 12,
						
					}}
					style={{
						
						height: "70vh",
						width: "100%",
						margin: "0",
						
						
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
						position: { lat: 48.9333, lng: 2.3667 },
					


					}}
				/>
				<Marker
					id="marker2"
					opts={{
						draggable: false,
						label: "Arrivée",
						position: { lat: 48.95, lng: 2.3167 },
					}}
				/>
				<InfoWindow
					anchorId="marker"
					opts={{
				
					}}
					visible
				>
					<button
						onClick={() => {
							alert("trouvez les taxis");
						}}>	
						<CoDriving size={size.small} color={color.purple} /> <h2>42€</h2>
					</button>
				
				</InfoWindow>
				<Polyline
					id="polyline"
					opts={{
						path: [
							{ lat: 48.9333, lng: 2.3667 },
							{ lat: 48.9167, lng: 2.3833 },
							{ lat: 48.9, lng: 2.3333 },
							{ lat: 48.95, lng: 2.3167 },
						],
						strokeColor: "orange",
					}}
				/>
				<OverlayView position={{ lat: 48.91, lng: 2.3667 }}>
				<Taxi  size={size.medium} color={color.purple} />
				<h2>48€</h2>
				</OverlayView>
			</GoogleMapProvider>
			
			<CardList/>
			</Container>
		</>
	);
};
export default ItineraryMap;
