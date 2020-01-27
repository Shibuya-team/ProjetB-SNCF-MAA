import React from "react";
import styled from "styled-components";
import Button from "./Button";
import BoxColor from "./BoxColor"
import GlobalStyle from "./GlobalStyle";





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

const H1 = styled.h1`
font-size: 30px;
outline: none;
padding-left:20px;
color: #F9C153,
width: 250px;





`;


const Input = (props) => (
	<>
 <GlobalStyle/>
    <BoxColor className='oldpink forms'>
        <H1>Créez votre espace</H1>
		<StyledInput  placeholder='Votre prénom '/>
        <StyledInput  placeholder='Votre nom '/>
        <StyledInput  placeholder='Votre email '/>
        <StyledInput  placeholder='Votre téléphone '/>
        <Button label='VALIDER'/>
        </BoxColor>
       
        </>
	
);



export default Input;
