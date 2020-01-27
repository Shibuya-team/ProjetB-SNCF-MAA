import PlacesAutocomplete, {
  geocodeByAddress,
  // geocodeByPlaceId,
  getLatLng
} from "react-places-autocomplete";

export const arrivalActions = {
  handleArrival: (store, address) => {
    store.setState({ arrival: { address: address } });
  },
  handleSelect: (store, address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        store.setState({
          arrival: { address: address, lat: latLng.lat, lng: latLng.lng }
        });
        console.log(
          "Success arrival address",
          `latitude : ${store.state.arrival.lat}`,
          `longitude : ${store.state.arrival.lng}`,
          `address : ${store.state.arrival.address}`
        );
        console.log("globalState : ", store.state);
      })
      .catch(error => console.error("Error", error));
  }
};

export const departureActions = {
  handleDeparture: (store, address) => {
    store.setState({ departure: { address: address } });
  },
  handleSelect: (store, address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        store.setState({
          departure: { address: address, lat: latLng.lat, lng: latLng.lng }
        });
        console.log(
          "Success departure address",
          `latitude : ${store.state.departure.lat}`,
          `longitude : ${store.state.departure.lng}`,
          `address : ${store.state.departure.address}`
        );
        console.log("globalState : ", store.state);
      })
      .catch(error => console.error("Error", error));
  }
};

export const datePickerActions = {
  handleDateTime: (store, value) => {
    store.setState({ date: value });
  }
};
