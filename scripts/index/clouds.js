let idCloud = 1;
const pathCloud = "images/clouds/cloud";

const imgCloud = document.getElementById("cloud").children[0];
imgCloud.src = pathCloud + idCloud + ".png";
setInterval(() => {
  ++idCloud;
  if (idCloud > 5) idCloud = 1;
  imgCloud.src = pathCloud + idCloud + ".png";
}, 22 * 1000);
