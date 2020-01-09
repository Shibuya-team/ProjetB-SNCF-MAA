import React, { useState } from "react";
import styled from "styled-components";
import DateTimePicker from "react-datetime-picker";

const StyledInput = styled.div`
  font-size: 2em;
  color: #241f5d;
  padding: 10px;
`;

function DatePicker() {
  const dateNow = new Date();
  const [dateTime, setDateTime] = useState({ date: dateNow });

  const handleDateTime = value => {
    setDateTime({ date: value });
  };

  return (
    <>
      <StyledInput>
        <DateTimePicker value={dateTime.date} onChange={handleDateTime} />
      </StyledInput>
    </>
  );
}

export default DatePicker;
