const primary = (color: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(color).trim();

export const COLORS = {
  PRIMARY: primary("--color-primary"),
  DP_GRAY: primary("--color-dp-gray"),
  DP_GRAY_BLUE: primary("--color-dp-gray-blue"),
  DP_GRAY_SEMI: primary("--color-dp-gray-semi"),
  DP_GRAY_DARK: primary("--color-dp-gray-dark"),
  DP_ICE_BLUE: primary("--color-dp-ice-blue"),
  DP_OFF_WHITE: primary("--color-off-white"),
  DP_GRAY_LIGHT: primary("--color-dp-gray-light"),
  DP_GRAY_LIGHTV2: primary("--color-dp-gray-lightv2"),
  DP_LIME_GREEN: primary("--color-dp-lime-green"),
  DP_PURPLE_V2: primary("--color-dp-purplev2"),
  DP_DARK_BLUE: primary("--color-dp-dark-blue"),
  DP_RED: primary("--color-dp-red"),
  DP_DARK_GREEN: primary("--color-dp-dark-green"),
  DP_DP_BLUE: primary("--color-dp-blue"),
  DP_ORANGE: primary("--color-dp-orange"),
};

export const getColorIntensity = (color: string, intensity: number) => {
  // detect if the color is in hex format
  if (color.startsWith("#")) {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${intensity})`;
  } else {
    new TypeError("Color is not in hex format");
  }
};
