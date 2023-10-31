document.getElementById("flag").play();
const menuList = document.getElementById("menuList");
const showingDiv = document.getElementsByClassName("showingDiv");
const sizeBorderBottom = 1;
const sizeClosed =
  showingDiv[0].children[0].scrollHeight + sizeBorderBottom + "px";
let lastShow;
for (const section of showingDiv) {
  section.style.maxHeight = sizeClosed;
  section.children[0].addEventListener("click", () => {
    if (lastShow !== undefined) {
      lastShow.style.maxHeight = sizeClosed;
      const needToReturn = lastShow === section;
      lastShow = undefined;
      if (needToReturn) return;
    }
    lastShow = section;
    section.style.maxHeight = section.scrollHeight + "px";
  });
}

function show() {
  const isVisible = menuList.style.display === "block";
  const nav = menuList.children[0];
  menuList.style.display = isVisible ? "none" : "block";

  if (isVisible) {
    nav.style.display = "none";
    return;
  }

  setTimeout(() => {
    nav.style.display = "block";
  }, 450);
}
