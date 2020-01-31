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
          },
          itineraryDataFromMaaS: {
            wish: {},
            status: "",
            results: [],
            searchId: ""
          }
        });
      })
      .catch(error => console.error("Error", error));
  }
};

export const datePickerActions = {
  handleDateTime: (store, value) => {
    const value1 = value !== null ? value : new Date();
    const dateISO = value1.toISOString();
    store.setState({
      itinerary: { ...store.state.itinerary, date: value1, dateISO: dateISO }
    });
  },
  updateTimePicker: (store, value) => {
    const value2 = value !== null ? value : new Date();
    if (value2.valueOf() < new Date().valueOf()) {
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

    const getManyResultsFromAPI = async () => {
      return await axios
        .get(
          `http://localhost:5000/search/itinerary?destLat=${store.state.infosToAPIMaaS.destination.lat}&destLng=${store.state.infosToAPIMaaS.destination.lng}&oriLat=${store.state.infosToAPIMaaS.origin.lat}&oriLng=${store.state.infosToAPIMaaS.origin.lng}&searchDate=${store.state.infosToAPIMaaS.searchDate}&searchId=${store.state.itineraryDataFromMaaS.searchId}`
        )
        .then(res => {
          store.setState({
            itineraryDataFromMaaS: {
              wish: res.data.wish,
              status: res.data.status,
              results:
                // [
                res.data.results,
              // ...res.data.results,
              // {
              //   segments: [
              //     ...res.data.results.segments,
              //     {
              //       proposals: [
              //         ...store.state.itineraryDataFromMaaS.results.segments.proposals.concat(
              //           res.data.results.segments.proposals
              //         )
              //       ]
              //     }
              //   ]
              // }
              // ],
              searchId: res.data.searchId
            }
            // store.state.itineraryDataFromMaaS.results.push(
            //   res.data.results
          });
          //   if (
          //     store.state.itineraryDataFromMaaS.status !== "COMPLETE" ||
          //     store.state.itineraryDataFromMaaS.status !== "ERROR" ||
          //     store.state.itineraryDataFromMaaS.results.length <= 20
          //   ) {
          //     getManyResultsFromAPI(store.state.itineraryDataFromMaaS.searchId);
          //   }
          // })
        })
        .catch(err => {
          console.log(
            "Échec de connexion server pour search/itinerary ! " + err
          );
        });
    };

    if (store.state.formTravel.isValid) {
      getManyResultsFromAPI();
    }
  }
};

export const itineraryMapActions = {};
