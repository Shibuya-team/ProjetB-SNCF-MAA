import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DateTimePicker from "react-datetime-picker";

const StyledInput = styled.div`
  font-size: 2em;
  color: #241f5d;
  padding: 10px;
`;

function DatePicker() {
  const [dateTime, setDateTime] = useState({ date: null });

  useEffect(() => {
    initializeDate();
  }, []);

  const handleDateTime = value => {
    setDateTime({ date: value });
  };

  const initializeDate = event => {
    setDateTime({ date: new Date() });
  };

  return (
    <>
      <StyledInput>
        <DateTimePicker
          value={dateTime.date}
          onChange={handleDateTime}
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
