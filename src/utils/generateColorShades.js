export function generateColorShades() {
  const baseColor = {
    hue: 231,
    saturation: 87,
    lightness: 56,
  };
  const colorName = "primary";
  const shades = {};
  // Base color
  shades[
    "--clr-" + colorName + "-base"
  ] = `hsl(${baseColor.hue}, ${baseColor.saturation}%, ${baseColor.lightness}%)`;

  // Generate shades
  let count = 0;
  for (let i = 100; i <= 900; i += 100) {
    count += 5;
    shades["--clr-" + colorName + "-" + i] = `hsl(${baseColor.hue}, ${
      baseColor.saturation
    }%, ${baseColor.lightness + count}%)`;
  }
  console.log(shades);
}

generateColorShades();
