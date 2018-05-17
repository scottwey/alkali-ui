import {
  getLuminance,
  complement,
  lighten,
  darken,
  transparentize,
  mix,
  readableColor
} from "polished";

export const lumaSensitiveComplement = color => {
  const luma = getLuminance(color);
  const transform = luma > 0.5 ? darken : lighten;
  return transform(0.3, complement(color));
};

export const readableComplement = color => {
  return mix(0.2, complement(color), readableColor(color));
};

export const lumaSensitiveBrightness = color => {
  const luma = getLuminance(color);
  const transform = luma > 0.5 ? lighten : darken;
  return transform(0.1, color);
};

export const darkenTransparentize = (t, d, color) =>
  transparentize(t, darken(d, color));

export const standardShadow = color =>
  `0 4px 6px ${darkenTransparentize(
    0.85,
    0.3,
    color
  )}, 0 1px 3px ${darkenTransparentize(0.9, 0.7, color)}`;
