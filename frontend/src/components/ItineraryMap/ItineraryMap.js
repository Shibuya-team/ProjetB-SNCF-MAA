import React from "react";
import {
	GoogleMapProvider,
	MapBox,
	Marker,
	Polyline,
	OverlayView,
	InfoWindow,
} from "@googlemap-react/core";
import secrets from "../../secrets";
import useGlobal from "../../global-state-management/store";

export const ItineraryMap = (props) => {
	const [center, itineraryMapActions] = useGlobal(
		(state) => state.itineraryMap.center,
		(actions) => actions.itineraryMapActions,
	);
	const [itineraryArrival, arrivalActions] = useGlobal(
		(state) => state.itinerary.arrival,
		(actions) => actions.arrivalActions,
	);
	const [itineraryDeparture, departureActions] = useGlobal(
		(state) => state.itinerary.departure,
		(actions) => actions.departureActions,
	);

	return (
		<>
			<GoogleMapProvider>
				<MapBox
					apiKey={secrets.apiKey}
					regionParam="FR"
					languageParam="FR"
					opts={{
						center: {
							lat: itineraryArrival.lat,
							lng: itineraryArrival.lng,
						},
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
						position: {
							lat: itineraryDeparture.lat,
							lng: itineraryDeparture.lng,
						},
					}}
				/>
				<Marker
					id="marker2"
					opts={{
						draggable: false,
						label: "Arrivée",
						position: { lat: itineraryArrival.lat, lng: itineraryArrival.lng },
					}}
				/>
				<Polyline
					id="polyline"
					opts={{
						path: [
							{ lat: itineraryDeparture.lat, lng: itineraryDeparture.lng },
							{ lat: itineraryArrival.lat, lng: itineraryArrival.lng },
						],
						strokeColor: "orange",
						strokeWeight: 5,
					}}
				/>
			</GoogleMapProvider>
		</>
	);
};
export default ItineraryMap;
