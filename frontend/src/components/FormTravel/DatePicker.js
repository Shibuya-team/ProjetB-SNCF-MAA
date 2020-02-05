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
<<<<<<< HEAD
	const [date, datePickerActions] = useGlobal(
		(state) => state.itinerary.date,
		(actions) => actions.datePickerActions,
	);
	return (
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
	);
=======
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
>>>>>>> 33a527f34cd7a8ee80b8177f79d6676b739dd342
}

export default DatePicker;
