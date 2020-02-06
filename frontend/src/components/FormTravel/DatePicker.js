import React from "react";
import styled from "styled-components";
import DateTimePicker from "react-datetime-picker";
import useGlobal from "../../global-state-management/store";
import * as momentTz from "moment-timezone";

const StyledInput = styled.div`
  font-size: 1.5em;
  color: #5353a2;
  padding: 10px;
`;

function DatePicker() {
  const [date, datePickerActions] = useGlobal(
    state => state.itinerary.date,
    actions => actions.datePickerActions
  );

  return (
    <StyledInput>
      <DateTimePicker
        value={date}
        onChange={datePickerActions.handleDateTime}
        showLeadingZeros={true}
        required={false}
        disableClock={true}
        minDate={new Date()}
        minTime={momentTz()
          .tz("Europe/Paris")
          .hours(
            momentTz()
              .tz("Europe/Paris")
              .hour()
          )
          .minutes(
            momentTz()
              .tz("Europe/Paris")
              .minutes()
          )}
        clearIcon={false}
      />
    </StyledInput>
  );
}

export default DatePicker;
