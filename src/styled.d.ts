import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    point: {
			red: string,
			orange: string,
			yellow: string,
			lavender: string,
			beige: string,
			purple: string,
			hotPink: string,
			pink: string,
			skyblue: string,
			blue: [string, string],
			green: string
		},
		neon: {
			mint: string,
			yellow: string
		},
		bgColor: {
			gray: {
				first: string,
				second: string,
				third: string,
				fourth: string,
				fifth: string
			}
		},
		borColor: {
			gray: {
				first: string,
			}
		}
		textColor: {
			gray: {
				first: string,
				second: string,
				third: string,
				fourth: string,
				fifth: string
			}
		},
		shadow: {
			under: string,
			under2: string,
			box: string,
			button: string
		},
		gradient: {
			first: string,
			second: string
		},
		opacity: {
			first: string
		}
  }
}