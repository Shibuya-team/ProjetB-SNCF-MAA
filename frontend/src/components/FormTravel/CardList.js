/* eslint-disable array-callback-return */
import React from "react";
import styled from "styled-components";
import Luggage from "../../images/icones/Luggage";
import Travellers from "../../images/icones/Travellers";
import Taxi from "../../images/icones/Mapicones/Taxi";
import Vtc from "../../images/icones/Mapicones/Vtc";
import Data from "../../Data";
import Media from "styled-media-query";
import color from "../color";
import size from "../size";

const ContainerTitle = styled.div`
	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts[0]};
	font-size: ${(props) => props.theme.fontSizes.small};
	background-color: ${(props) => props.theme.colors.asura};
	${Media.greaterThan("large")`width=50%;`}
`;

const ContainerList = styled.div`
	padding: 5px 0 5px 0;
	background-color: ${(props) => props.theme.colors.asura};
	${Media.greaterThan("large")`width=50%;`}
`;

const ContainerCard = styled.div`
	display: flex;
	margin: 5px 0 5px 0;
	justify-content: space-between;
	padding: 10px;
	width: auto;
	background-color: ${(props) => props.theme.colors.sky};
	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts[0]};
	animation: slide 0.1s ease-in-out;
	${Media.greaterThan("large")`width=50%;`}
	@keyframes slide {
		0% {
			transform: translate(0px, 100px);
		}
		100% {
			transform: translate(0px, 0px);
		}
	}
`;

const ContainerLine = styled.div`
	align-content: left;
	text-align: left;
	color: ${(props) => props.theme.colors.purple};
	font-family: ${(props) => props.theme.fonts[0]};
	font-size: ${(props) => props.theme.fontSizes.small};
	width: auto;
`;
const Valider = styled.div`
	text-align: right;
	color: ${(props) => props.theme.colors.purple};
	font-family: ${(props) => props.theme.fonts[0]};
	font-size: ${(props) => props.theme.fontSizes.small};
`;

const CardList = () => {
	return (
		<>
			{Data.results.map((results, index) => {
				return (
					<ContainerList key={index}>
						{results.segments[0].proposals.map((proposal, index) => {
							return (
								<ContainerTitle>
									<ContainerCard key={index + "proposal"}>
										<ContainerLine>
											{proposal.fleetType === "VTC" ? (
												<Vtc
													size={size.medium}
													color={color.purple}
													style={{ marginingRight: "10px" }}
												/>
											) : (
												<Taxi
													size={size.medium}
													color={color.purple}
													style={{ paddingRight: "10px" }}
												/>
											)}
											<span style={{ paddingRight: "10px" }} />
											{proposal.carWithDriverAttributes.passengerCapacity}
											<Travellers
												size={size.small}
												color={color.purple}
												style={{ paddingRight: "10px" }}
											/>
											<span style={{ paddingRight: "10px" }} />
											{proposal.carWithDriverAttributes.luggageCapacity}
											<Luggage size={size.small} color={color.purple} />
											<span style={{ paddingRight: "10px" }} />
											<span>
												{`${proposal.price.amount
													.toString()
													.slice(
														0,
														-2,
													)},${proposal.price.amount.toString().slice(-2)}`}
												<span>€</span>
												<span style={{ paddingRight: "20px" }} />
											</span>
										</ContainerLine>
										<Valider
											style={({ textAlign: "right" }, { color: "white" })}
										>
											> Commander
										</Valider>
									</ContainerCard>
								</ContainerTitle>
							);
						})}
					</ContainerList>
				);
			})}
		</>
	);
};

export default CardList;
