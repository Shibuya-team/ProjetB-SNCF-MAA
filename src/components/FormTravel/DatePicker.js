import React from "react";
import styled from "styled-components";
import DateTimePicker from 'react-datetime-picker'

const StyledInput = styled.div`
font-size: 24px;
color: #241F5D;
padding:10px;


`;

function DatePicker() {
	return <>
	
	
	<StyledInput>
	
	<DateTimePicker  />
	   
	   </StyledInput>
	</>;
}

export default DatePicker;
