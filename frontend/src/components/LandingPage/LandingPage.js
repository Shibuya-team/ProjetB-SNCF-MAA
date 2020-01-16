import React from "react";
import Accordeon from "./Accordeon";

const LandingPage = props => {
  const { globalState, setGlobalState } = props;

  return (
    <>
      <Accordeon globalState={globalState} setGlobalState={setGlobalState} />
    </>
  );
};

export default LandingPage;
