//sanke game is being developed in 600 *600 so i am using same function to generate random number of width and height
const randomNumberGenerator = function (
  canvasWidthInGrids,
  canvasWidthInGrids
) {
  const x = Math.floor(Math.random() * canvasWidthInGrids);
  const y = Math.floor(Math.random() * canvasHeightInGrids);
  return { x, y };
};
