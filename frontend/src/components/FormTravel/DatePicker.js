import React from "react";
import styled from "styled-components";
import DateTimePicker from "react-datetime-picker";

const StyledInput = styled.div`
  font-size: 2em;
  color: #241f5d;
  padding: 10px;
`;

function DatePicker() {
  return (
    <StyledInput>
      <DateTimePicker />
    </StyledInput>
  );
}

export default DatePicker;
