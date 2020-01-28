import PlacesAutocomplete, {
  geocodeByAddress,
  // geocodeByPlaceId,
  getLatLng
} from "react-places-autocomplete";

export const googleApiScriptActions = {
  handleScriptError: store => {
    store.setState({
      googleApiScript: { ...store.state.googleApiScript, scriptError: true }
    });
    console.log("Library for Google API is not loaded !");
  },
  handleScriptLoad: store => {
    store.setState({
      googleApiScript: { ...store.state.googleApiScript, scriptLoaded: true }
    });
    console.log("Library for Google API successfully loaded !");
  }
};

export const arrivalActions = {
  handleArrival: (store, address) => {
    console.log(store.state);
    store.setState({
      itinerary: { ...store.state.itinerary, arrival: { address: address } }
    });
    console.log(store.state);
  },
  handleSelect: (store, address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        store.setState({
          itinerary: {
            ...store.state.itinerary,
            arrival: { address: address, lat: latLng.lat, lng: latLng.lng }
          }
        });
        console.log(
          "Success arrival address",
          `latitude : ${store.state.itinerary.arrival.lat}`,
          `longitude : ${store.state.itinerary.arrival.lng}`,
          `address : ${store.state.itinerary.arrival.address}`
        );
        console.log("globalState : ", store.state);
      })
      .catch(error => console.error("Error", error));
  }
};

export const departureActions = {
  handleDeparture: (store, address) => {
    store.setState({
      itinerary: { ...store.state.itinerary, departure: { address: address } }
    });
  },
  handleSelect: (store, address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        store.setState({
          itinerary: {
            ...store.state.itinerary,
            departure: { address: address, lat: latLng.lat, lng: latLng.lng }
          }
        });
        console.log(
          "Success departure address",
          `latitude : ${store.state.itinerary.departure.lat}`,
          `longitude : ${store.state.itinerary.departure.lng}`,
          `address : ${store.state.itinerary.departure.address}`
        );
        console.log("globalState : ", store.state);
      })
      .catch(error => console.error("Error", error));
  }
};

export const datePickerActions = {
  handleDateTime: (store, value) => {
    store.setState({ itinerary: { ...store.state.itinerary, date: value } });
  }
};

export const validFormTravelActions = {
  handleSubmit: store => {
    if (
      store.state.itinerary.departure.lat &&
      store.state.itinerary.departure.lng &&
      store.state.itinerary.date
    ) {
      store.setState({ formTravel: { isValid: true, message: "" } });
    } else {
      store.setState({
        formTravel: {
          isValid: false,
          message: "Formulaire incomplet : veuillez remplir tous les champs."
        }
      });
    }
  }
};
