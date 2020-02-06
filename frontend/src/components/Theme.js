import React from "react";
import { ThemeProvider } from "styled-components";
import "../fonts/fonts.css";

const theme = {
	colors: {
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
		sky: "#00bcd4",
		white: "#FFFFFF",
	},
	fonts: ["Amiko-Regular", "Amiko-Bold", "Amiko-SemiBold", "sans-serif"],
	fontSizes: {
		small: "1em",
		medium: "1.5em",
		large: "2em",
		xlarge: "3em",
	},
};
const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default Theme;
