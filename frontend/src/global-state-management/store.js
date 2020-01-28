import React from "react";
import useGlobalHook from "use-global-hook";
import * as actions from "./actions";

const placeStateInit = { address: "", lat: null, lng: null };
const initialState = {
  itinerary: {
    departure: { ...placeStateInit },
    arrival: { ...placeStateInit },
    date: new Date()
  },
  formTravel: {
    isValid: false,
    message: ""
  },
  aroundme: {
    origin: { ...placeStateInit },
    date: new Date()
  },
  googleApiScript: {
    scriptLoaded: false,
    scriptError: false
  }
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
