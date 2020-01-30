import React, { useEffect } from "react";
import ButtonStyle from "../ButtonStyle";
import useGlobal from "../../global-state-management/store";

function Valid() {
  const [formTravel, validFormTravelActions] = useGlobal(
    state => state.formTravel,
    actions => actions.validFormTravelActions
  );
  const [validItinerary] = useGlobal(state => state.infosToAPIMaaS);

  return (
    <>
      <p style={{ color: "red" }}>
        {!formTravel.isValid && formTravel.message}
      </p>
      <ButtonStyle
        label="VALIDER"
        onClick={validFormTravelActions.handleSubmit}
      />
    </>
  );
}

export default Valid;
