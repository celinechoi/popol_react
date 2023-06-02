import { css, CSSObject, SimpleInterpolation } from "styled-components";

type DeviceType = "micro" | "smallToo" | "small" | "medium" | "large";

const sizes: Record<DeviceType, number> = {
	micro: 370, // phone
	smallToo: 540, // phone
	small: 767, // phone
	medium: 1024, // tablet
	large: 1200, // desktop
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