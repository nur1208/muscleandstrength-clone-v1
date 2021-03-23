const path = require("path");
const getColors = require("get-image-colors");

let imageMainColor;
getColors(path.join(__dirname, "download.jpg")).then((colors) => {
  //   colors.map((color) => console.log(color.hex()));
  //   imageMainColor = colors[0].hex();
  //   console.log(imageMainColor);
  //   exports.imageMainColor = { imageMainColor };
  //   return colors;
});
// const getFirstColor = async () => {
//   imageMainColor = await getColors("download.jpg", function (err, colors) {
//     if (err) throw err;
//     return colors[0].hex();
//     //   console.log(colors[0].hex());
//     //   imageMainColor = colors[0].hex();
//   });
// };

// getFirstColor();
// const getFirstColor = async () => {
//   let colors = await
//   return colors[0].hex;
// };
exports.firstColor = getColors(path.join(__dirname, "download.jpg"));

// console.log(imageMainColor);
