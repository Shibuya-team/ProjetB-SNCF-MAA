import React from "react";
import styled from "styled-components";
import BoxColor from "./BoxColor";


const Round = styled.div`
	height:50px;

	outline: none;
	padding: 20px;
border-radius: 50%;
`;

const Color = (props) => (
	
		<BoxColor className={props.colorway}><Round/></BoxColor>
        
	
);



export default Color;
