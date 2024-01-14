export const generateRandomColor = (): string => {
  const colorType = Math.floor(Math.random() * 15);
  const colors = [
    '#FF0000', // Red (high contrast)
    '#00FF00', // Green (high contrast)
    '#0000FF', // Blue (medium contrast)
    '#FF00FF', // Magenta (medium contrast)
    '#00FFFF', // Cyan (medium contrast)
    '#A52A2A', // Dark red (medium contrast)
    '#D5691E', // Crimson (medium contrast)
    '#7DAA06', // Olive (high contrast)
    '#008000', // Dark green (medium contrast)
    '#000080', // Dark blue (medium contrast)
    '#800080', // Purple (medium contrast)
    '#008080', // Teal (medium contrast)
    '#808000', // Olive drab (high contrast)
    '#808080', // Gray (medium contrast)
    '#000000', // Black (high contrast)
  ];

  return colors[colorType];
};
