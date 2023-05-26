import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    point: {
			orange: string;
			pink: string;
			yellow: string;
			lavender: string;
			beige: string;
			purple: string;
			green: string;
		},
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      darker: string;
      lighter: string;
    };
  }
}