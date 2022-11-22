import { css } from "styled-components";
// import media from "./media";

export const sizes = {
  desktop: "1024",
  tablet: "820",
  mobile: "500",
};

const theme = {
  colors: {
    // Primary
    color_text_black: "#1B1B1B", //bold type black title type shit uknowamsayin & header text
    color_gray: "#F8F7F5", //color of gray box, example logo background color, and color of text in black button
    color_logo_basic: "#F8F7F4",

    color_white: "#FFFFFF",
    color_text_input_box: "#434343", //70% opacity

    color_button_white: "#FFFEFC",
    color_button_black: "#4E4E4E",
    color_text_in_white_button: "#434343",
    color_text_in_black_button: "#F8F7F5",

    color_org_card: "#EDEDED",
    color_UW_red: "#C5050C",

    color_text_footer: "#858585",
  },

  fontSizes: {
    txt_largest: "22px",
    txt_larger: "20px",
    txt_large: "18px",
    txt_standard: "16px",
    txt_small: "14px",
    txt_smaller: "12px",
    txt_smallest: "10px",

    txt_hero: css`
      font-size: 32px;
      line-height: 40px;
      font-weight: 700;
      color: #2b3d41;
    `,

    txt_h1: css`
      font-size: 24px;
      font-weight: bold;
      line-height: 32px;
      color: #2b3d41;
    `,

    txt_h2: css`
      font-size: 20px;
      font-weight: bold;
      line-height: 24px;
      color: #2b3d41;
    `,

    txt_h3: css`
      font-size: 16px;
      font-weight: bold;
      line-height: 20px;
      color: #2b3d41;
    `,

    txt_h4: css`
      font-size: 14px;
      font-weight: bold;
      line-height: 20px;
      color: #2b3d41;
    `,

    txt_h5: css`
      font-size: 12px;
      font-weight: bold;
      line-height: 16px;
      color: #2b3d41;
    `,

    txt_h6: css`
      font-size: 10px;
      font-weight: bold;
      line-height: 12px;
      color: #2b3d41;
    `,
  },

  elevations: {
    elevation_light:
      "0px 1px 2px rgba(0, 0, 0, 0.16), 0px 1px 0px rgba(0, 0, 0, 0.12)",
    elevation_medium: "0px 2px 2px rgba(0, 0, 0, 0.30)",
    elevation_heavy: "0px 4px 10px rgba(0, 0, 0, 0.30)",
    elecation_j:
      "rgb(23 43 77 / 20%) 0px 1px 1px, rgb(23 43 77 / 20%) 0px 0px 1px",
  },

  screenSizes: {
    desktop: `(max-width: ${sizes.desktop}px)`,
    tablet: `(max-width: ${sizes.tablet}px)`,
    mobile: `(max-width: ${sizes.mobile}px)`,
  },

  widthSizes: {
    desktop: sizes.desktop,
    tablet: sizes.tablet,
    mobile: sizes.mobile,
  },

  // ...media,
};

export default theme;
