import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
	point: {
		red: "#d32f2f",
		orange: "#ff543a",
		yellow: "#f8d622",
		lavender: "#cdb7ea",
		beige: "#fbeaad",
		purple: "#9f5fff",
		blue: ["#0179c3", "rgba(1, 121, 195, 0.2)"],
		green: "#14e090"
	},
	bgColor: {
		gray: {
			first: "#000",
			second: "#424242",
			third: "#616161",
			fourth: "#757575",
			fifth: "#9e9e9e"
		}
	},
	textColor: {
		gray: {
			first: "#fff",
			second: "#fafafa",
			third: "#f5f5f5",
			fourth: "#eee",
			fifth: "#e0e0e0"
		}
	},
	shadow: {
		under: "0 2px 10px 0 rgba(255,255,255,0.25)",
		box: "0 3px 7px 2px rgb(255, 255, 255, 0.11)",
		button: "rgba(57, 57, 57, 0.17) 0px -23px 25px 0px inset, rgba(57, 57, 57, 0.15) 0px -36px 30px 0px inset, rgba(57, 57, 57, 0.1) 0px -79px 40px 0px inset, rgba(57, 57, 57, 0.06) 0px 2px 1px, rgba(57, 57, 57, 0.09) 0px 4px 2px, rgba(57, 57, 57, 0.09) 0px 8px 4px, rgba(57, 57, 57, 0.09) 0px 16px 8px, rgba(57, 57, 57, 0.09) -3px 7px 16px"
	}
}

export const lightTheme: DefaultTheme = {
	point: {
		red: "#d32f2f",
		orange: "#ff543a",
		yellow: "#FFC83D",
		lavender: "#ac7aef",
		beige: "#f9de7d",
		purple: "#7217fb",
		blue: ["#13b9dc", "rgba(19, 185, 220, 0.2)"],
		green: "#14e090"
	},
	bgColor: {
		gray: {
			first: "#fff",
			second: "#fafafa",
			third: "#f5f5f5",
			fourth: "#eee",
			fifth: "#e0e0e0"
		}
	},
	textColor: {
		gray: {
			first: "#000",
			second: "#424242",
			third: "#616161",
			fourth: "#757575",
			fifth: "#9e9e9e"
		}
	},
	shadow: {
		under: "0 2px 10px 0 rgba(0,0,0,0.1)",
		box: "0 2px 5px 0 rgba(0, 0, 0, 0.08)",
		button: "rgba(215, 215, 215, 0.17) 0px -23px 25px 0px inset, rgba(215, 215, 215, 0.15) 0px -36px 30px 0px inset, rgba(215, 215, 215, 0.1) 0px -79px 40px 0px inset, rgba(215, 215, 215, 0.06) 0px 2px 1px, rgba(215, 215, 215, 0.09) 0px 4px 2px, rgba(215, 215, 215, 0.09) 0px 8px 4px, rgba(215, 215, 215, 0.09) 0px 16px 8px, rgba(215, 215, 215, 0.09) -3px 7px 16px"
	}
}