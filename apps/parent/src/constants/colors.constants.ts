const primary = (color: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(color).trim();

export const COLORS = {
  PRIMARY: primary("--color-primary"),
  DP_GRAY: primary("--color-dp-gray"),
  DP_GRAY_SEMI: primary("--color-dp-gray-semi"),
  DP_GRAY_DARK: primary("--color-dp-gray-dark"),
  DP_ICE_BLUE: primary("--color-dp-ice-blue")
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
