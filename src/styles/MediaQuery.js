import { css } from "@emotion/react";

export const SCREENS = {
  desktop: 1280,
  smallDesktop: 1024,
  mobile: 768,
};

function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

const rawMediaQuery = (screenSize, style) =>
  css`
    @media (max-width: ${SCREENS[screenSize]}px) {
      ${style};
    }
  `;

export const mediaQuery = curry(rawMediaQuery);
