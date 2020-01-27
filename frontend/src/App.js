import React, { useState, useEffect } from "react";
import Theme from "./components/Theme";
import styled from "styled-components";
import MenuBurger from "./components/Nav/MenuBurger";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import secrets from "./secrets";
import Script from "react-load-script";
import axios from "axios";

const Container = styled.div`
  max-width: 2440px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  background-color: ${props => props.theme.colors.emerald};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts[0]};
`;

function App() {
  //Script loading
  const [googleApiScript, setGoogleApiScript] = useState({
    googleApiScript: { scriptLoaded: false, scriptError: false }
  });

  const handleScriptError = () => {
    setGoogleApiScript({ scriptError: true });
    console.log("Library for Google API is not loaded !");
  };
  const handleScriptLoad = () => {
    setGoogleApiScript({ scriptLoaded: true });
    console.log("Library for Google API successfully loaded !");
  };

  const placeStateInit = { address: "", lat: null, lng: null };
  const [globalState, setGlobalState] = useState({
    departure: { ...placeStateInit },
    arrival: { ...placeStateInit },
    date: null
  });
  console.log(globalState);
  
	useEffect(() => {
		axios
			.get("http://localhost:5000/getNewToken")
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err.message));
	}, []);

  return (
    <>
      <Theme>
        <Container>
          <MenuBurger />
          <Script
            url={`https://maps.googleapis.com/maps/api/js?key=${secrets.apiKey}&libraries=places&region=FR`}
            onError={handleScriptError}
            onLoad={handleScriptLoad}
          />
          {googleApiScript.scriptLoaded === true ? (
            <LandingPage
            />
          ) : (
            <p>Chargement...</p>
          )}
        </Container>
        <Footer />
      </Theme>
    </>
  );
}

export default App;