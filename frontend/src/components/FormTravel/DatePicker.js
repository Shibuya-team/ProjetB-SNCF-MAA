import React from "react";
import styled from "styled-components";
import DateTimePicker from "react-datetime-picker";
import useGlobal from "../../global-state-management/store";

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
  return (
    <>
      <StyledInput>
        <DateTimePicker
          value={date}
          onChange={datePickerActions.handleDateTime}
          showLeadingZeros={true}
          required={true}
          disableClock={true}
          minDate={new Date()}
          clearIcon={false}
        />
      </StyledInput>
    </>
  );
}

export default DatePicker;
