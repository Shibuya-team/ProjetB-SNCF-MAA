import React from "react";
import styled from "styled-components";
import Luggage from "../../images/icones/Luggage";
import Travellers from "../../images/icones/Travellers";
import Taxi from "../../images/icones/Mapicones/Taxi";
import Vtc from "../../images/icones/Mapicones/Vtc";
import Bus from "../../images/icones/Mapicones/Bus";
import Media from "styled-media-query";
import useGlobal from "../../global-state-management/store";
import color from "../color";
import size from "../size";

const ContainerTitle = styled.div`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts[0]};
  font-size: ${props => props.theme.fontSizes.small};
  background-color: ${props => props.theme.colors.asura};
  ${Media.greaterThan("large")`width=50%;`}
`;

const ContainerList = styled.div`
  padding: 5px 0 5px 0;
  background-color: ${props => props.theme.colors.asura};
  ${Media.greaterThan("large")`width=50%;`}
`;

const ContainerCard = styled.div`
  display: flex;
  margin: 5px 0 5px 0;
  justify-content: space-between;
  padding: 10px;
  width: auto;
  background-color: ${props => props.theme.colors.sky};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts[0]};
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
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 10px 0 10px 0;
  color: ${props => props.theme.colors.purple};
  font-family: ${props => props.theme.fonts[0]};
  font-size: ${props => props.theme.fontSizes.medium};
`;
const ContainerPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 10px 0 10px 0;
  color: ${props => props.theme.colors.brick};
  font-family: ${props => props.theme.fonts[2]};
  font-size: ${props => props.theme.fontSizes.large};
`;

const Valider = styled.div`
  text-align: right;
  color: ${props => props.theme.colors.purple};
  font-family: ${props => props.theme.fonts[0]};
  font-size: ${props => props.theme.fontSizes.small};
`;

const CardList = () => {
  const data = useGlobal(state => state.itineraryDataFromMaaS)[0];
  const message = useGlobal(state => state.messageItinerary)[0];

  return (
    <>
      <ContainerLine>{message}</ContainerLine>
      {data.results &&
        data.results.map((results, index) => {
          return (
            <ContainerList key={index}>
              {results.segments.map(
                segment =>
                  segment.proposals &&
                  segment.proposals.map((proposal, index) => {
                    return (
                      <ContainerTitle>
                        <ContainerCard key={index + "proposal"}>
                          <ContainerLine>
                            {proposal.fleetType ? (
                              proposal.fleetType === "VTC" ? (
                                <Vtc
                                  size={size.medium}
                                  color={color.white}
                                  style={{ marginingRight: "10px" }}
                                />
                              ) : proposal.fleetType === "TAXI" ? (
                                <Taxi
                                  size={size.medium}
                                  color={color.white}
                                  style={{ marginingRight: "10px" }}
                                />
                              ) : (
                                <Bus
                                  size={size.medium}
                                  color={color.white}
                                  style={{ marginingRight: "10px" }}
                                />
                              )
                            ) : proposal.mobilityType ? (
                              proposal.mobilityType === "BUS" ? (
                                <Bus size={size.medium} color={color.white} />
                              ) : (
                                ""
                              )
                            ) : (
                              ""
                            )}
                            <span style={{ paddingRight: "10px" }} />
                            {proposal.carWithDriverAttributes ? (
                              proposal.carWithDriverAttributes
                                .passengerCapacity ? (
                                <>
                                  {
                                    proposal.carWithDriverAttributes
                                      .passengerCapacity
                                  }
                                  <Travellers
                                    size={size.small}
                                    color={color.purple}
                                    style={{ paddingRight: "10px" }}
                                  />
                                  <span style={{ paddingRight: "10px" }} />
                                </>
                              ) : (
                                <span style={{ width: "20px" }} />
                              )
                            ) : (
                              <span style={{ width: "20px" }} />
                            )}
                            {proposal.carWithDriverAttributes ? (
                              proposal.carWithDriverAttributes
                                .luggageCapacity ? (
                                <>
                                  {
                                    proposal.carWithDriverAttributes
                                      .luggageCapacity
                                  }
                                  <Luggage
                                    size={size.small}
                                    color={color.purple}
                                    style={{ paddingRight: "10px" }}
                                  />
                                </>
                              ) : (
                                <span style={{ width: "20px" }} />
                              )
                            ) : (
                              <span style={{ width: "20px" }} />
                            )}

                            <span>
                              {`${proposal.price.amount
                                .toString()
                                .slice(
                                  0,
                                  -2
                                )},${proposal.price.amount
                                .toString()
                                .slice(-2)}`}
                              <span>€</span>
                            </span>

                            <Valider
                              style={
                                ({ textAlign: "right" }, { color: "white" })
                              }
                            >
                              > Commander
                            </Valider>
                          </ContainerLine>
                        </ContainerCard>
                      </ContainerTitle>
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
