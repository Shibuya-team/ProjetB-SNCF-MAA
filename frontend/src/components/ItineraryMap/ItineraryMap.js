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
							styles={[
								{
									elementType: "geometry",
									stylers: [
										{
											color: "#ebe3cd",
										},
									],
								},
								{
									elementType: "labels.text.fill",
									stylers: [
										{
											color: "#523735",
										},
									],
								},
								{
									elementType: "labels.text.stroke",
									stylers: [
										{
											color: "#f5f1e6",
										},
									],
								},
								{
									featureType: "administrative",
									elementType: "geometry.stroke",
									stylers: [
										{
											color: "#c9b2a6",
										},
									],
								},
								{
									featureType: "administrative.land_parcel",
									elementType: "geometry.stroke",
									stylers: [
										{
											color: "#dcd2be",
										},
									],
								},
								{
									featureType: "administrative.land_parcel",
									elementType: "labels.text.fill",
									stylers: [
										{
											color: "#ae9e90",
										},
									],
								},
								{
									featureType: "landscape.natural",
									elementType: "geometry",
									stylers: [
										{
											color: "#dfd2ae",
										},
									],
								},
								{
									featureType: "poi",
									elementType: "geometry",
									stylers: [
										{
											color: "#dfd2ae",
										},
									],
								},
								{
									featureType: "poi",
									elementType: "labels.text.fill",
									stylers: [
										{
											color: "#93817c",
										},
									],
								},
								{
									featureType: "poi.park",
									elementType: "geometry.fill",
									stylers: [
										{
											color: "#a5b076",
										},
									],
								},
								{
									featureType: "poi.park",
									elementType: "labels.text.fill",
									stylers: [
										{
											color: "#447530",
										},
									],
								},
								{
									featureType: "road",
									elementType: "geometry",
									stylers: [
										{
											color: "#f5f1e6",
										},
									],
								},
								{
									featureType: "road.arterial",
									elementType: "geometry",
									stylers: [
										{
											color: "#fdfcf8",
										},
									],
								},
								{
									featureType: "road.highway",
									elementType: "geometry",
									stylers: [
										{
											color: "#f8c967",
										},
									],
								},
								{
									featureType: "road.highway",
									elementType: "geometry.stroke",
									stylers: [
										{
											color: "#e9bc62",
										},
									],
								},
								{
									featureType: "road.highway.controlled_access",
									elementType: "geometry",
									stylers: [
										{
											color: "#e98d58",
										},
									],
								},
								{
									featureType: "road.highway.controlled_access",
									elementType: "geometry.stroke",
									stylers: [
										{
											color: "#db8555",
										},
									],
								},
								{
									featureType: "road.local",
									elementType: "labels.text.fill",
									stylers: [
										{
											color: "#806b63",
										},
									],
								},
								{
									featureType: "transit.line",
									elementType: "geometry",
									stylers: [
										{
											color: "#dfd2ae",
										},
									],
								},
								{
									featureType: "transit.line",
									elementType: "labels.text.fill",
									stylers: [
										{
											color: "#8f7d77",
										},
									],
								},
								{
									featureType: "transit.line",
									elementType: "labels.text.stroke",
									stylers: [
										{
											color: "#ebe3cd",
										},
									],
								},
								{
									featureType: "transit.station",
									elementType: "geometry",
									stylers: [
										{
											color: "#dfd2ae",
										},
									],
								},
								{
									featureType: "water",
									elementType: "geometry.fill",
									stylers: [
										{
											color: "#b9d3c2",
										},
									],
								},
								{
									featureType: "water",
									elementType: "labels.text.fill",
									stylers: [
										{
											color: "#92998d",
										},
									],
								},
							]}
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
	);
};
export default ItineraryMap;
