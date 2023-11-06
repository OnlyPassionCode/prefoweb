const names =
  "1425,1752,1847,1887,1912,1925,1931,1936,1941,1945,1948,1951,1953,1957,1960,1962,1969,1971,1973,1975,1977,1979,1981,1983,1985,1987,1989,1992,1994,1996,1999,2001,2004,2006,2009,2011,2013,2015,2017,476".split(
    ","
  );
const fileName = [];
names.forEach((n) => {
  fileName.push(+n);
});
fileName.sort(function (a, b) {
  return a - b;
});

const folder = "images/timeline/";
const timeline = document.getElementById("timeline").children[1];
const showImg = document.getElementById("viewImage");
const imgShowImg = document.getElementById("imgViewImage");
const backgroundViewImage = document.getElementById("backgroundViewImage");

backgroundViewImage.addEventListener("click", () => {
  showImg.style.display = "none";
  backgroundViewImage.style.display = "none";
});

for (let i = 0; i < 6; ++i) {
  const img = document.createElement("img");
  img.src = folder + fileName[i] + ".jpg";
  img.addEventListener("click", () => {
    imgShowImg.src = img.src;
    showImg.style.display = "block";
    backgroundViewImage.style.display = "block";
  });
  timeline.appendChild(img);
}
