import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from "react-accessible-accordion";
import "./Accordeon.css";
import Quotes from "../../images/icones/Quotes";
import Transportation from "../../images/Transportation";
import styled from "styled-components";
import MobiliteFirstLogo from "../../images/MobiliteFirstLogo";
import FormTravel from "../FormTravel/FormTravel";
import FormArroundMe from "../FormArroundMe/FormArroundMe";

const Container = styled.div`
 width: 100%;
 padding-right:0px;
 padding-left:20px;
 margin:0px;
}
 p{
     padding:0px;
     margin-top:0px;
 }
 h2{
     padding:0px;
     margin:0px;
 }
 `;

export default function Accordeon() {
	return (
		<>
			<Accordion allowZeroExpanded={true} preExpanded={"mobility"}>
				<AccordionItem uuid="mobility">
					<AccordionItemHeading>
						<AccordionItemButton className="">
							<Container>
								<MobiliteFirstLogo />
							</Container>
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<Container>
							<Quotes />
							<h2>COMMANDEZ</h2>
							<p>votre trajet multi-modal</p>
							<Transportation />
						</Container>
					</AccordionItemPanel>
				</AccordionItem>
				<AccordionItem >
				<AccordionItemHeading>
					<AccordionItemButton className="bg-color-plum">
						<h2>Rechercher un itinéraire </h2>
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>		
			<FormTravel />
			</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem >
				<AccordionItemHeading>
					<AccordionItemButton className="bg-color-orange">
						<h2>Autour de moi</h2>
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
			<FormArroundMe />

			</AccordionItemPanel>
			</AccordionItem>
            </Accordion>
		</>
	);
}
