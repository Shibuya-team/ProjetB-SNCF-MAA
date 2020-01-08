import React from "react";
import styled from "styled-components";
import ButtonStyle from "../ButtonStyle";
import Luggage from "../../images/icones/Luggage";
import Travellers from "../../images/icones/Travellers";
import Taxi from "../../images/icones/Mapicones/Taxi";

const color = {
	grey: "#EBE8E8",
	oldpink: "#F0DBD8",
	salmon: "#FFCAB8",
	gold: "#F9C153",
	purple: "#241F5D",
	velvet: "#5353A2",
	plum: "#6767AD",
	emerald: "#78C4D2",
	turquoise: "#7ED0DF",
	asura: "#94DAD5",
	orange: "#FF8B66",
	brick: "#EB5933",
	white: "#FFFFFF",
};

const size = {
	small: "20px",
	medium: "30px",
	large: "40px",
	xlarge: "50px",
};

const ContainerCard = styled.div`
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	border-radius: 5px;
    margin:10px ;
    padding-bottom:0;
	width: 45%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	align-content: center;
	text-align: center;
	background-color: ${(props) => props.theme.colors.asura};
	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts[0]};
	fontsize: ${(props) => props.theme.fontSizes.large};
`;
const ContainerTitreLine = styled.div`
	width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
	flex-direction: column;
	padding: 10px 0 10px 0;
	background-color: ${(props) => props.theme.colors.grey};
	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts[0]};
	fontsize: ${(props) => props.theme.fontSizes.medium};
`;
const ContainerLine = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: row;
	padding: 10px 0 10px 0;
	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts[0]};
	fontsize: ${(props) => props.theme.fontSizes.medium};
`;

function CardList() {
	return (
		<>
			<ContainerCard>
				<ContainerTitreLine>
					<Taxi size={size.medium} color={color.purple} />
					EXECUTIVE
				</ContainerTitreLine>
                <ContainerLine>
                <Travellers size={size.small} color={color.purple} />X4
                </ContainerLine>
                <ContainerLine>
				<Luggage size={size.small} color={color.purple} />X2
                </ContainerLine>
				
				<ButtonStyle style={{marginBottom:'auto',
		
		
	}} big="true" label="COMMANDER" />
			</ContainerCard>
		</>
	);
}

export default CardList;
