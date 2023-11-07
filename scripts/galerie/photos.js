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

function getCurrentTranslateXFromElement(element) {
  return window
    .getComputedStyle(element, null)
    .getPropertyValue("transform")
    .split(",")[4]
    .trim();
}

function stopTranslateAndKeepPosition(currentTranslateX) {
  for (let y = 0; y < timeline.children.length; ++y) {
    const image = timeline.children[y];
    image.style.transform = "translate(" + currentTranslateX + "px, 0)";
    image.classList.add("notransition");
  }
}

function restartTranslateWithCurrentPosition(currentTranslateX) {
  const widthScroll = timeline.children[0].scrollWidth;
  for (let y = 0; y < timeline.children.length; ++y) {
    const image = timeline.children[y];
    image.classList.remove("notransition");
    image.style.transform = "translate(-" + totalScrollWidth + "px, 0)";
    const duration =
      120 - (Math.floor(Math.abs(+currentTranslateX)) / widthScroll) * 3;
    image.style.transitionDuration = duration + "s";
  }
}

const showImg = document.getElementById("viewImage");
const backgroundViewImage = document.getElementById("backgroundViewImage");
const timeline = document.getElementById("timeline").children[1];
let isClickedImage = false;
backgroundViewImage.addEventListener("click", () => {
  showImg.style.display = "none";
  backgroundViewImage.style.display = "none";
  restartTranslateWithCurrentPosition(
    getCurrentTranslateXFromElement(timeline.children[0])
  );
  isClickedImage = false;
});

function loadBaseImage() {
  const folder = "images/timelineResized/";
  const imgShowImg = document.getElementById("imgViewImage");
  for (let i = 0; i < names.length; ++i) {
    const img = document.createElement("img");
    img.src = folder + fileName[i] + ".jpg";
    img.addEventListener("click", () => {
      isClickedImage = true;
      imgShowImg.src = img.src.replace("timelineResized", "timeline");
      showImg.style.display = "block";
      backgroundViewImage.style.display = "block";
      stopTranslateAndKeepPosition(getCurrentTranslateXFromElement(img));
    });
    timeline.appendChild(img);
  }
}
loadBaseImage();

let totalScrollWidth = 0;
function animation() {
  for (let i = 0; i < timeline.children.length; ++i) {
    const scrollWidth = timeline.children[i].scrollWidth;
    totalScrollWidth += scrollWidth;
  }
  for (let i = 0; i < timeline.children.length; ++i) {
    timeline.children[i].style.transform =
      "translate(-" + totalScrollWidth + "px, 0)";
  }
}
animation();

function addEventListenerToImage() {
  for (let i = 0; i < timeline.children.length; ++i) {
    const overImage = timeline.children[i];
    overImage.addEventListener("mouseover", () => {
      const currentTranslateX = getCurrentTranslateXFromElement(overImage);
      stopTranslateAndKeepPosition(currentTranslateX);
    });
    overImage.addEventListener("mouseout", () => {
      if (isClickedImage) return;
      restartTranslateWithCurrentPosition(
        getCurrentTranslateXFromElement(overImage)
      );
    });
  }
}
addEventListenerToImage();
