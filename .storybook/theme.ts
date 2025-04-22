import { create } from "@storybook/theming"

export default create({
  base: "light",
  brandTitle: `<img src="https://i.imgur.com/VdPmK4G.png" height="64px"/>`,
  brandUrl: "https://www.educalliance.eu/",
  brandTarget: "_self",

  fontBase: '"Inter", sans-serif',
  fontCode: "monospace",

  colorPrimary: "rgb(40, 190, 127)",
  colorSecondary: "rgb(40, 190, 127)",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderRadius: 8,

  // Text colors
  textColor: "#10162F",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "rgb(61, 61, 59)",
  barSelectedColor: "rgb(40, 190, 127)",
  barHoverColor: "rgb(40, 190, 127)",
  barBg: "#ffffff",

  /*// Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2, */
})
