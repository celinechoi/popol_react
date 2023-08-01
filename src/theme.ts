import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
	point: {
		red: "#d32f2f",
		orange: "#ff543a",
		yellow: "#ffb350",
		lavender: "#cdb7ea",
		beige: "#fbeaad",
		purple: "#9f5fff",
		pink: "#e879f9",
		hotPink: "#e4138d",
		skyblue: "#00e1ff",
		blue: ["#0179c3", "rgba(1, 121, 195, 0.2)"],
		green: "#14e090"
	},
	neon: {
		mint: "rgb(0, 255, 200)",
		yellow: "rgb(255, 242, 66)"
	},
	bgColor: {
		gray: {
			first: "#000",
			second: "#424242",
			third: "#616161",
			fourth: "#757575",
			fifth: "#9e9e9e",
		}
	},
	borColor: {
		gray: {
			first: "#4c4c4c"
		}
	},
	textColor: {
		gray: {
			first: "#fff",
			second: "#f5f5f5",
			third: "#e0e0e0",
			fourth: "#bdbdbd",
			fifth: "#9e9e9e"
		}
	},
	shadow: {
		under: "0 2px 10px 0 rgba(255,255,255,0.25)",
		under2: "#050505", 
		box: "0 3px 7px 2px rgb(255, 255, 255, 0.11)",
		button: "rgba(57, 57, 57, 0.17) 0px -23px 25px 0px inset, rgba(57, 57, 57, 0.15) 0px -36px 30px 0px inset, rgba(57, 57, 57, 0.1) 0px -79px 40px 0px inset, rgba(57, 57, 57, 0.06) 0px 2px 1px, rgba(57, 57, 57, 0.09) 0px 4px 2px, rgba(57, 57, 57, 0.09) 0px 8px 4px, rgba(57, 57, 57, 0.09) 0px 16px 8px, rgba(57, 57, 57, 0.09) -3px 7px 16px"
	},
	gradient: {
		first: "linear-gradient(144deg,#af40ff,#5b42f3 50%,#00ddeb);",
		second: "linear-gradient(90deg, rgba(228, 19, 141, 0.925) 0%, rgb(255, 179, 80) 100%);"
	},
	opacity: {
		first: "rgba(255, 255, 255, 0.5)"
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
		pink: "#e879f9",
		hotPink: "#e4138d",
		skyblue: "#00b5ff",
		blue: ["#13b9dc", "rgba(19, 185, 220, 0.2)"],
		green: "#14e090"
	},
	neon: {
		mint: "#02ecb9",
		yellow: "#ffcc42"
	},
	bgColor: {
		gray: {
			first: "#fff",
			second: "#fafafa",
			third: "#f5f5f5",
			fourth: "#eee",
			fifth: "#e0e0e0",
		}
	},
	borColor: {
		gray: {
			first: "#f0f0f0"
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
		under2: "#ddd", 
		box: "0 2px 5px 0 rgba(0, 0, 0, 0.08)",
		button: "rgba(215, 215, 215, 0.17) 0px -23px 25px 0px inset, rgba(215, 215, 215, 0.15) 0px -36px 30px 0px inset, rgba(215, 215, 215, 0.1) 0px -79px 40px 0px inset, rgba(215, 215, 215, 0.06) 0px 2px 1px, rgba(215, 215, 215, 0.09) 0px 4px 2px, rgba(215, 215, 215, 0.09) 0px 8px 4px, rgba(215, 215, 215, 0.09) 0px 16px 8px, rgba(215, 215, 215, 0.09) -3px 7px 16px"
	},
	gradient: {
		first: "linear-gradient(144deg,#af40ff,#5b42f3 50%,#00ddeb);",
		second: "linear-gradient(90deg, rgba(228, 19, 141, 0.925) 0%, rgb(255, 179, 80) 100%);"
	},
	opacity: {
		first: "rgba(55, 55, 55, 0.5)"
	}
}