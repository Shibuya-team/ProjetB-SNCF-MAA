import React from "react";
import useGlobalHook from "use-global-hook";
import * as actions from "./actions";

const placeStateInit = { address: "", lat: 0, lng: 0 };
const initialState = {
  itinerary: {
    departure: { ...placeStateInit },
    arrival: { ...placeStateInit },
    date: new Date(),
    dateISO: ""
  },
  formTravel: {
    isValid: false,
    message: "",
    submitted: 0
  },
  aroundme: {
    origin: { ...placeStateInit },
    date: new Date()
  },
  googleApiScript: {
    scriptLoaded: false,
    scriptError: false
  },
  itineraryMap: {
    center: {
      lat: 48.9333,
      lng: 2.3667
    },
    zoom: 10
  },
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
  },
  itineraryDataFromMaaS: {
    wish: {},
    status: "",
    results: [],
    searchId: ""
  },
  messageItinerary: ""
};

const useGlobal = useGlobalHook(React, initialState, actions);
export const connect = Component => {
  return props => {
    let [state, actions] = useGlobal();
    let _props = { ...props, state, actions };
    return <Component {..._props} />;
  };
};

export default useGlobal;
