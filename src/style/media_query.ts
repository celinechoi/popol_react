import { css, CSSObject, SimpleInterpolation } from "styled-components";

type DeviceType = "micro" | "smallToo" | "horizontal" | "small" | "medium" | "large";

const sizes: Record<DeviceType, number> = {
	micro: 375, // phone
	smallToo: 650, // phone
	horizontal: 820, // phone horizontal
	small: 767, // phone
	medium: 1024, // tablet
	large: 1440, // desktop
};

const media = Object.entries(sizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<DeviceType, any>;

export { media };