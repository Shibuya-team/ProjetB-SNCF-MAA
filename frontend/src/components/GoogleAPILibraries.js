import React, { useState } from "react";
import secrets from "../secrets";
import Script from "react-load-script";

const GoogleAPILibraries = () => {
  const [googleApiScript, setGoogleApiScript] = useState({
    googleApiScript: { scriptLoaded: false, scriptError: false }
  });
  const handleScriptCreate = () => {
    setGoogleApiScript({ scriptLoaded: false });
  };

  const handleScriptError = () => {
    setGoogleApiScript({ scriptError: true });
    console.log("Library for Google API not loaded !");
  };

  const handleScriptLoad = () => {
    setGoogleApiScript({ scriptLoaded: true });
  };
  return (
    <>
      <Script
        url={`https://maps.googleapis.com/maps/api/js?key=${secrets.apiKey}&libraries=places&region=FR`}
        onCreate={handleScriptCreate}
        onError={handleScriptError}
        onLoad={handleScriptLoad}
      />
    </>
  );
};

export default GoogleAPILibraries;
