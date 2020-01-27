import React from "react";
import styled from "styled-components";
import ButtonStyle from "../ButtonStyle";
import Luggage from "../../images/icones/Luggage";
import Travellers from "../../images/icones/Travellers";
import Taxi from "../../images/icones/Mapicones/Taxi";
import Vtc from "../../images/icones/Mapicones/Vtc";
import media from "styled-media-query";

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
	small: "1em",
	medium: "2em",
	large: "4em",
	xlarge: "5em",
};

const ContainerTitle = styled.div`
	text-align: left;

	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts[0]};
	font-size: ${(props) => props.theme.fontSizes.small};
	padding: 0 20px 0 20px;
`;

const Containerlist = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	background-color: ${(props) => props.theme.colors.asura};
`;

const ContainerCard = styled.div`
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	border-radius: 5px;
	margin: 10px;
	padding-bottom: 0;
	width: 30%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	align-content: center;
	text-align: center;
	background-color: ${(props) => props.theme.colors.salmon};
	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts[0]};
	${media.lessThan("small")`
    width: 100%;
  `}
`;
const ContainerTitreLine = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	flex-direction: column;
	padding: 10px 0 10px 0;
	background-color: ${(props) => props.theme.colors.orange};
	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts[2]};
	font-size: ${(props) => props.theme.fontSizes.small};
`;
const ContainerLine = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: row;
	padding: 10px 0 10px 0;
	color: ${(props) => props.theme.colors.purple};
	font-family: ${(props) => props.theme.fonts[0]};
	font-size: ${(props) => props.theme.fontSizes.medium};
`;
const ContainerPrice = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: row;
	padding: 10px 0 10px 0;
	color: ${(props) => props.theme.colors.brick};
	font-family: ${(props) => props.theme.fonts[2]};
	font-size: ${(props) => props.theme.fontSizes.large};
`;

function CardList() {
	return (
		<>
			<ContainerTitle>
				<ul>
					<li>DEPART:</li>
					<li>ARRIVEE:</li>
				</ul>
			</ContainerTitle>
			<Containerlist>
				<ContainerCard>
					<ContainerTitreLine>
						<Vtc size={size.medium} color={color.white} />
						EXECUTIVE
					</ContainerTitreLine>
					<ContainerLine>
						<Travellers size={size.small} color={color.purple} />
						X4
					</ContainerLine>
					<ContainerLine>
						<Luggage size={size.small} color={color.purple} />
						X2
					</ContainerLine>
					<ContainerPrice>45.00€</ContainerPrice>
					(Prix estimé)
					<ButtonStyle
						style={{ marginBottom: "auto" }}
						big="true"
						label="COMMANDER"
					/>
				</ContainerCard>
				<ContainerCard>
					<ContainerTitreLine>
						<Taxi size={size.medium} color={color.white} />
						EXECUTIVE
					</ContainerTitreLine>
					<ContainerLine>
						<Travellers size={size.small} color={color.purple} />
						X4
					</ContainerLine>
					<ContainerLine>
						<Luggage size={size.small} color={color.purple} />
						X2
					</ContainerLine>
					<ContainerPrice>45.00€</ContainerPrice>
					(Prix estimé)
					<ButtonStyle
						style={{ marginBottom: "auto" }}
						big="true"
						label="COMMANDER"
					/>
				</ContainerCard>
				<ContainerCard>
					<ContainerTitreLine>
						<Taxi size={size.medium} color={color.white} />
						EXECUTIVE
					</ContainerTitreLine>
					<ContainerLine>
						<Travellers size={size.small} color={color.purple} />
						X4
					</ContainerLine>
					<ContainerLine>
						<Luggage size={size.small} color={color.purple} />
						X2
					</ContainerLine>
					<ContainerPrice>45.00€</ContainerPrice>
					(Prix estimé)
					<ButtonStyle
						style={{ marginBottom: "auto" }}
						big="true"
						label="COMMANDER"
					/>
				</ContainerCard>
			</Containerlist>
		</>
	);
}

export default CardList;
