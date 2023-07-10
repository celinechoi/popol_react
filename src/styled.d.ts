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
			blue: [string, string],
			green: string
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
			box: string,
			button: string
		}
  }
}