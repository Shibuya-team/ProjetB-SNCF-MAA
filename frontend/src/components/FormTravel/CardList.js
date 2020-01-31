/* eslint-disable array-callback-return */
import React from "react";
import styled from "styled-components";
import ButtonStyle from "../ButtonStyle";
import Luggage from "../../images/icones/Luggage";
import Travellers from "../../images/icones/Travellers";
import Taxi from "../../images/icones/Mapicones/Taxi";
import Vtc from "../../images/icones/Mapicones/Vtc";
import Bus from "../../images/icones/Mapicones/Bus";
import Moment from "react-moment";
import Media from "styled-media-query";
import useGlobal from "../../global-state-management/store";
import color from "../color";
import size from "../size";

const ContainerTitle = styled.div`
	text-align: left;
	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts[0]};
	font-size: ${(props) => props.theme.fontSizes.small};
	padding: 0 20px 0 20px;
	margin-top: 20px;
`;

const ContainerList = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	flex-wrap: wrap;
	background-color: ${(props) => props.theme.colors.asura};
`;

const ContainerCard = styled.div`
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	border-radius: 5px;
	margin: 10px;
	padding-bottom: 0;
	width: 45%;
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
	${Media.lessThan("small")`width=100%;`}
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

const CardList = () => {
  const data = useGlobal(state => state.itineraryDataFromMaaS)[0];
  
  return (
    <>
      {data.results &&
        data.results.map((results, index) => {
          return (
            <ContainerList key={index}>
              {results.segments.map(
                segment =>
                  segment.proposals &&
                  segment.proposals.map((proposal, index) => {
                    return (
                      <ContainerCard key={index + "proposal"}>
                        {proposal.fleetType ? (
                          <ContainerTitreLine>
                            {proposal.fleetType === "VTC" ? (
                              <Vtc size={size.medium} color={color.white} />
                            ) : proposal.fleetType === "TAXI" ? (
                              <Taxi size={size.medium} color={color.white} />
                            ) : (
                              <Bus size={size.medium} color={color.white} />
                            )}
                          </ContainerTitreLine>
                        ) : proposal.mobilityType ? (
                          <ContainerTitreLine>
                            {proposal.mobilityType === "BUS" ? (
                              <Bus size={size.medium} color={color.white} />
                            ) : (
                              ""
                            )}
                          </ContainerTitreLine>
                        ) : (
                          ""
                        )}
                        {proposal.carWithDriverAttributes ? (
                          proposal.carWithDriverAttributes.passengerCapacity ? (
                            <ContainerLine>
                              {
                                proposal.carWithDriverAttributes
                                  .passengerCapacity
                              }
                              <Travellers
                                size={size.small}
                                color={color.purple}
                              />
                            </ContainerLine>
                          ) : (
                            <ContainerLine>
                              <span style={{ height: "32.5px" }} />
                            </ContainerLine>
                          )
                        ) : (
                          <ContainerLine>
                            <span style={{ height: "32.5px" }} />{" "}
                          </ContainerLine>
                        )}
                        {proposal.carWithDriverAttributes ? (
                          proposal.carWithDriverAttributes.luggageCapacity ? (
                            <ContainerLine>
                              {proposal.carWithDriverAttributes.luggageCapacity}
                              <Luggage size={size.small} color={color.purple} />
                            </ContainerLine>
                          ) : (
                            <ContainerLine>
                              <span style={{ height: "32.5px" }} />{" "}
                            </ContainerLine>
                          )
                        ) : (
                          <ContainerLine>
                            <span style={{ height: "32.5px" }} />{" "}
                          </ContainerLine>
                        )}

                        <ContainerPrice>
                          {`${proposal.price.amount
                            .toString()
                            .slice(
                              0,
                              -2
                            )},${proposal.price.amount.toString().slice(-2)}`}
                          <span>€</span>
                        </ContainerPrice>

                        <ButtonStyle
                          style={{ marginBottom: "auto" }}
                          big="true"
                          label="COMMANDER"
                        />
                      </ContainerCard>
                    );
                  })
              )}
            </ContainerList>
          );
        })}
    </>
  );
};

export default CardList;
