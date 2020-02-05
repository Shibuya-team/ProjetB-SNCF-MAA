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
import SliderHome from "./SliderHome";
import styled from "styled-components";
import MobiliteFirstLogo from "../../images/MobiliteFirstLogo";
import FormAroundMe from "../FormAroundMe/FormAroundMe";
import FormTravel from "../FormTravel/FormTravel";

const Container = styled.div`
 width: 100%;
 margin-right:0px;
 padding-right:0px;
 padding-left:0px;
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
						<SliderHome />
					</Container>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton className="bg-color-plum">
						<h2>Rechercher un itinéraire </h2>
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<FormTravel />
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton className="bg-color-orange">
						<h2>Autour de moi</h2>
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<FormAroundMe />
				</AccordionItemPanel>
			</AccordionItem>
		</Accordion>
	);
}
