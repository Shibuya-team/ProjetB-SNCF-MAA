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
import styled from "styled-components";
import secrets from "../../secrets";
import ButtonStyle from "../ButtonStyle";
import Datepicker from "../FormTravel/DatePicker";
import CardList from "../FormTravel/CardList";
import Data from "../../Data.js";

const Container = styled.div`
	.gm-ui-hover-effect {
		opacity: 0;
	}
`;

export const ItineraryMap = () => {
	return (
		<>
			<Container>
				<GoogleMapProvider>
					<StandaloneAutocomplete
						id="departure"
						placeholder="Adresse de départ"
						style={{
							lineHeight: "1.2em",
							width: "250px",
							borderTop: "none",
							borderLeft: "none",
							borderRight: "none",
							borderBottom: "1px solid #6767AD",
							fontSize: "1.3em",
							outline: "none",
							padding: "20px",
							margin: "10px",
							background: "rgba(255, 255, 255, 0)",
							color: "#241F5D",
						}}
					/>
					<StandaloneAutocomplete
						id="arrival"
						placeholder="Adresse d'arrivée"
						style={{
							lineHeight: "1.2em",
							width: "250px",
							borderTop: "none",
							borderLeft: "none",
							borderRight: "none",
							borderBottom: "1px solid #6767AD",
							fontSize: "1.3em",
							outline: "none",
							padding: "20px",
							margin: "10px",
							background: "rgba(255, 255, 255, 0)",
							color: "#241F5D",
						}}
					/>
					<Datepicker />
					<ButtonStyle label="VALIDER" />
					{Data.results.map((result, index) => {
						return (
							<MapBox
								key={index}
								apiKey={secrets.apiKey}
								regionParam="FR"
								languageParam="FR"
								opts={{
									center: {
										lat: Data.wish.destination.latitude,
										lng: Data.wish.destination.longitude,
									},
									zoom: 10,
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
						);
					})}
					{Data.results.map((result, index) => {
						return (
							<Marker
								key={index}
								id="marker"
								opts={{
									draggable: false,
									label: "Départ",
									position: {
										lat: Data.wish.origin.latitude,
										lng: Data.wish.origin.longitude,
									},
								}}
							/>
						);
					})}
					{Data.results.map((result, index) => {
						return (
							<Marker
								key={index}
								id="marker2"
								opts={{
									draggable: false,
									label: "Arrivée",
									position: {
										lat: Data.wish.destination.latitude,
										lng: Data.wish.destination.longitude,
									},
								}}
							/>
						);
					})}
					{/* <InfoWindow anchorId="marker" opts={{}} visible>
						<button
							onClick={() => {
								alert("trouvez les taxis");
							}}
						>
							<CoDriving size={size.small} color={color.purple} /> <h2>42€</h2>
						</button>
					</InfoWindow> */}

					{Data.results.map((result, index) => {
						return (
							<Polyline
								key={index}
								id="polyline"
								opts={{
									path: [
										{
											lat: Data.wish.origin.latitude,
											lng: Data.wish.origin.longitude,
										},

										{
											lat: Data.wish.destination.latitude,
											lng: Data.wish.destination.longitude,
										},
									],
									strokeColor: "orange",
								}}
							/>
						);
					})}
				</GoogleMapProvider>
				<CardList />
			</Container>
		</>
	);
};
export default ItineraryMap;
