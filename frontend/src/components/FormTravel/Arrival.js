import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  // geocodeByPlaceId,
  getLatLng
} from "react-places-autocomplete";
import { connect } from "../../global-state-management/store";

export class Arrival extends React.Component {
  render() {
    const { state, actions } = this.props;
    return (
      <>
        {console.log(state)}
        <PlacesAutocomplete
          value={state.itinerary.arrival.address}
          onChange={actions.arrivalActions.handleArrival}
          onSelect={actions.arrivalActions.handleSelect}
          shouldFetchSuggestions={state.itinerary.arrival.address.length > 1}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div>
              <input
                id="departure"
                placeholder="Adresse d'arrivée"
                style={{
                  lineHeight: "1.2em",
                  width: "250px",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "1px solid #6767AD",
                  fontSize: "1.3em",
                  outline: "none",
                  padding: "20px",
                  margin: "10px",
                  background: "rgba(255, 255, 255, 0)",
                  color: "#241F5D"
                }}
                {...getInputProps({
                  // placeholder: "Search Places ...",
                  className: "location-search-input"
                })}
              />
              <div
                className="autocomplete-dropdown-container"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                {loading && <div>Chargement...</div>}
                {suggestions.map(suggestion => {
                  const placeName = suggestion.active
                    ? suggestion.description
                    : "";
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? {
                        lineHeight: "1.2em",
                        width: "250px",
                        color: "#241F5D",
                        backgroundColor: "rgba(255, 255, 255, 20)",
                        cursor: "pointer",
                        fontSize: "1.3em",
                        outline: "none",
                        padding: "5px"
                      }
                    : {
                        lineHeight: "1.2em",
                        width: "250px",
                        color: "#241F5D",
                        backgroundColor: "rgba(255, 255, 255, 20)",
                        cursor: "pointer",
                        fontSize: "1.3em",
                        outline: "none",
                        padding: "5px"
                      };

                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </>
    );
  }
}

export default connect(Arrival);
