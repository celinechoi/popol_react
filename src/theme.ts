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
			fixth: "#9e9e9e"
		}
	},
	textColor: {
		gray: {
			first: "#fff",
			second: "#fafafa",
			third: "#f5f5f5",
			fourth: "#eee",
			fixth: "#e0e0e0"
		}
	},
	shadow: "0 2px 10px 0 rgba(255,255,255,0.1)"
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
			fixth: "#e0e0e0"
		}
	},
	textColor: {
		gray: {
			first: "#000",
			second: "#424242",
			third: "#616161",
			fourth: "#757575",
			fixth: "#9e9e9e"
		}
	},
	shadow: "0 2px 10px 0 rgba(0,0,0,0.1)"
}