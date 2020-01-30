import React, { useEffect } from "react";
import styled from "styled-components";
import DateTimePicker from "react-datetime-picker";
import useGlobal from "../../global-state-management/store";
import * as momentTz from "moment-timezone";

const StyledInput = styled.div`
  font-size: 2em;
  color: #241f5d;
  padding: 10px;
`;

function DatePicker() {
  const [date, datePickerActions] = useGlobal(
    state => state.itinerary.date,
    actions => actions.datePickerActions
  );
  // const submission = useGlobal(state => state.formTravel.submitted)[0];

  return (
    <>
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
        <p>{/* TEST : Compte : {submission} Date : {date.toString()} */}</p>
      </StyledInput>
    </>
  );
}

export default DatePicker;
