import { useEffect } from "react";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import axios from "../../../backend/node_modules/axios";

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
    if (address !== "") {
      store.setState({
        itinerary: {
          ...store.state.itinerary,
          arrival: { ...store.state.itinerary.arrival, address: address }
        }
      });
    } else {
      store.setState({
        itinerary: {
          ...store.state.itinerary,
          arrival: { address: "", lat: 0, lng: 0 }
        }
      });
    }
  },
  handleSelect: (store, address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        store.setState({
          ...store.state,
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
    if (address !== "") {
      store.setState({
        itinerary: {
          ...store.state.itinerary,
          departure: { ...store.state.itinerary.departure, address: address }
        }
      });
    } else {
      store.setState({
        itinerary: {
          ...store.state.itinerary,
          departure: { address: "", lat: 0, lng: 0 }
        }
      });
    }
  },
  handleSelect: (store, address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        store.setState({
          ...store.state,
          itinerary: {
            ...store.state.itinerary,
            departure: { address: address, lat: latLng.lat, lng: latLng.lng }
          },
          itineraryMap: {
            ...store.state.itineraryMap,
            center: {
              lat: latLng.lat,
              lng: latLng.lng
            }
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
    let dateISO = value.toISOString();
    store.setState({
      itinerary: { ...store.state.itinerary, date: value, dateISO: dateISO }
    });
    console.log(store.state.itinerary.date, store.state.itinerary.dateISO);
  },
  updateTimePicker: (store, value) => {
    if (value.valueOf() < new Date().valueOf()) {
      store.setState({
        itinerary: {
          ...store.state.itinerary,
          date: new Date(),
          dateISO: ""
        }
      });
    }
  }
};

export const validFormTravelActions = {
  handleSubmit: store => {
    const departureISValid =
      store.state.itinerary.departure.lat &&
      store.state.itinerary.departure.lng;
    const arrivalIsValid =
      store.state.itinerary.arrival.lat && store.state.itinerary.arrival.lng;

    if (
      departureISValid &&
      arrivalIsValid &&
      (store.state.itinerary.dateISO === "" ||
        new Date(store.state.itinerary.dateISO).valueOf() >
          new Date().valueOf())
    ) {
      store.setState({
        formTravel: {
          isValid: true,
          message: "",
          submitted: store.state.formTravel.submitted + 1
        }
      });
      store.setState({
        infosToAPIMaaS: {
          destination: {
            lat: store.state.itinerary.arrival.lat,
            lng: store.state.itinerary.arrival.lng
          },
          origin: {
            lat: store.state.itinerary.departure.lat,
            lng: store.state.itinerary.departure.lng
          },
          searchDate: store.state.itinerary.dateISO
            ? store.state.itinerary.dateISO
            : ""
        }
      });
    } else if (
      departureISValid &&
      arrivalIsValid &&
      store.state.itinerary.dateISO !== "" &&
      new Date(store.state.itinerary.dateISO).valueOf() < new Date().valueOf()
    ) {
      store.setState({
        formTravel: {
          isValid: true,
          message: "",
          submitted: store.state.formTravel.submitted + 1
        }
      });
      store.setState({
        itinerary: { ...store.state.itinerary, date: new Date(), dateISO: "" }
      });
      store.setState({
        infosToAPIMaaS: {
          destination: {
            lat: store.state.itinerary.arrival.lat,
            lng: store.state.itinerary.arrival.lng
          },
          origin: {
            lat: store.state.itinerary.departure.lat,
            lng: store.state.itinerary.departure.lng
          },
          searchDate: ""
        }
      });
    } else {
      store.setState({
        formTravel: {
          isValid: false,
          message:
            "Formulaire incomplet : veuillez remplir les champs de départ et d'arrivée",
          submitted: store.state.formTravel.submitted + 1
        }
      });
      store.setState({
        infosToAPIMaaS: {
          destination: {
            lat: null,
            lng: null
          },
          origin: {
            lat: null,
            lng: null
          },
          searchDate: ""
        }
      });
    }
    if (store.state.formTravel.isValid) {
      axios
        .get(
          `http://localhost:5000/search/itinerary?destLat=${store.state.infosToAPIMaaS.destination.lat}&destLng=${store.state.infosToAPIMaaS.destination.lng}&oriLat=${store.state.infosToAPIMaaS.origin.lat}&oriLng=${store.state.infosToAPIMaaS.origin.lng}&searchDate=${store.state.infosToAPIMaaS.searchDate}`
        )
        .then(res =>
          console.log("OK connexion server, route search/itinerary", res)
        )
        .catch(err => {
          console.log(
            "Échec de connexion server pour search/itinerary ! " + err
          );
        });
    }
  }
};

export const itineraryMapActions = {};
