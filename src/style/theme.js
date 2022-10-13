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
    color_primary_darker: "#2C5939",
    color_primary_dark: "#18835C",
    color_primary_regular: "#3DC28A",
    color_primary_light: "#69F0AE",
    color_primary_lighter: "#D1F0D9",
    // color_primary_darker: "#1B5E20",
    // color_primary_dark: "#188343",
    // color_primary_regular: "#3DC274",
    // color_primary_light: "#69F0AE",
    // color_primary_lighter: "#B9F6CA",
    // color_primary_darker: "#224B51",
    // color_primary_dark: "#298996",
    // color_primary_regular: "#36ABBB",
    // color_primary_light: "#4FC5D5",
    // color_primary_lighter: "#94E1EC",

    // Base
    color_base_darker: "#B7C5D2",
    color_base_dark: "#E1E7EC",
    color_base_regular: "#F3F5F8",
    color_base_white: "#FFFFFF",
    color_base_black: "#20282A",
    color_base_dimmer: "rgba(#20282A, 0.5)",

    // Feedback
    color_state_warning_dark: "#CC7704",
    color_state_warning_regular: "#FF9B14",
    color_state_warning_middle: "#FEBA5F",
    color_state_warning_light: "#FBF0E1",

    color_state_notification_dark: "#124A9E",
    color_state_notification_regular: "#89A1F4",
    color_state_notification_light: "#E2E6F3",

    color_state_danger_dark: "#C8271D",
    color_state_danger_regular: "#F85147",
    color_state_danger_light: "#FACFCD",

    // Texts
    color_text_titles: "#2b3d41",
    color_text_body: "#324249",
    color_text_light: "#6B7C83",
    color_text_placeholder: "#9AA5A9",
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
