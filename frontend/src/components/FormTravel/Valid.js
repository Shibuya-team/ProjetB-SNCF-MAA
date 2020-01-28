import React from "react";
import ButtonStyle from "../ButtonStyle";
import useGlobal from "../../global-state-management/store";

function Valid() {
  const [formTravel, validFormTravelActions] = useGlobal(
    state => state.formTravel,
    actions => actions.validFormTravelActions
  );
  return (
    <>
      <p style={{ color: "red" }}>
        {!formTravel.isValid && formTravel.message}
      </p>
      <ButtonStyle
        label="VALIDER"
        onSubmit={validFormTravelActions.handleSubmit}
      />
    </>
  );
}

export default Valid;
