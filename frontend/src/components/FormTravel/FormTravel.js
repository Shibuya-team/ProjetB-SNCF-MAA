import React from "react";
import "../LandingPage/Accordeon.css";
import ButtonStyle from "../ButtonStyle";
import Datepicker from './DatePicker'
import styled from "styled-components";


const StyledInput = styled.input`
line-height:  1.2em ;
width: 250px;
border-top: none;
border-left: none;
border-right: none;
border-bottom: 1px solid #6767AD;
font-size: 18px;
outline: none;
padding:20px;
margin:10px;
background: rgba(255, 255, 255, 0); 
color: #241F5D;
::placeholder{
    color:#6767AD;
}

`;


function FormTravel() {
	return <>

		
				<StyledInput  placeholder='Adresse de départ '/>
        <StyledInput  placeholder='Adresse de destination '/>
	   <Datepicker />
        <ButtonStyle label='VALIDER'/>
	
	</>;
}

export default FormTravel;
