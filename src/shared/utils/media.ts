import { ThemedCssFunction, css } from "styled-components";
import { Theme } from "../constants";

export const mediaSizes = {
    mobileL: 425,
    mobileXL: 576,
    tablet: 768,
    laptop: 992,
    laptopL: 1200,
    desktop: 1600,
};

// Iterate through the sizes and create a media template
export const media = (Object.keys(mediaSizes) as (keyof typeof mediaSizes)[]).reduce(
    (acc, label) => {
        acc[label] = (first: any, ...interpolations: any[]) => css`
            @media (min-width: ${mediaSizes[label]}px) {
                ${css(first, ...interpolations)}
            }
        `;

        return acc;
    },
    {} as { [key in keyof typeof mediaSizes]: ThemedCssFunction<Theme> }
);
