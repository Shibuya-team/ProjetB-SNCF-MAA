import React from "react";
import styled from "styled-components";
import Bus from "./images/icones/Mapicones/Bus";
import CoDriving from "./images/icones/Mapicones/CoDriving";
import Cycling from "./images/icones/Mapicones/Cycling";
import Taxi from "./images/icones/Mapicones/Taxi";
import Uber from "./images/icones/Mapicones/Uber";
import Tram from "./images/icones/Mapicones/Tram";
import Burger from "./images/icones/Burger";
import Info from "./images/icones/Info";
import Pdf from "./images/icones/Pdf";
import Close from "./images/icones/Close";
import Space from "./images/icones/Space";
import Upload from "./images/icones/Upload";
import Calendar from "./images/icones/Calendar";
import BasketEmpty from "./images/icones/BasketEmpty";
import Quotes from "./images/icones/Quotes";
import Contact from "./images/icones/Contact";
import BoxColor from "./BoxColor"


const Title = styled.h1`
  color: white;
  font-size:16px;
`;

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
	small: "0 0 512 512",
	medium: "0 0 256 256",
	large: "0 0 128 128",
	xlarge: "0 0 64 64",
};

const Icone = (props) => (
	<>
 
  <BoxColor className="turquoise iconesize">
		<Bus size={size.medium} color={color.white} />
    </BoxColor>
    <BoxColor className="asura iconesize">
		<CoDriving size={size.medium} color={color.white} />
    </BoxColor>
    <BoxColor className="orange iconesize">
		<Cycling size={size.medium} color={color.white} />
    </BoxColor>
    <BoxColor className="oldpink iconesize">
		<Taxi size={size.medium} color={color.white} />
    </BoxColor>
    <BoxColor className="brick iconesize">
		<Uber size={size.medium} color={color.white} />
    </BoxColor>
    <BoxColor className="plum iconesize">
		<Tram size={size.medium} color={color.white} />
    </BoxColor>
</>
);

const Icone2 = (props) => (
	<>
  <BoxColor className="oldpink iconesize">
		<Burger size={size.medium} color={color.white} />
    </BoxColor>
    <BoxColor className="oldpink iconesize">
		<Info size={size.medium} color={color.white} />
    </BoxColor>
    <BoxColor className="oldpink iconesize">
		<Contact size={size.medium} color={color.white} />
    </BoxColor>
    <BoxColor className="oldpink iconesize">
		<BasketEmpty size={size.medium} color={color.brick} />
    </BoxColor>
    <BoxColor className="oldpink iconesize">
		<Space size={size.medium} color={color.white} />
    </BoxColor>
    <BoxColor className="oldpink iconesize">
		<Close size={size.medium} color={color.white} />
    </BoxColor>
    <BoxColor className="grey iconesize">
		<Pdf size={size.medium} color={color.white} />
    </BoxColor>
    <BoxColor className="grey iconesize">
		<Upload size={size.medium} color={color.brick} />
    </BoxColor>
    <BoxColor className="turquoise iconesize">
		<Calendar size={size.medium} color={color.velvet} />
    </BoxColor>
    <BoxColor className="salmon iconesize">
		<Quotes size={size.medium} color={color.velvet} />
    </BoxColor>
</>
);
export  { Icone2 };
export default Icone;
