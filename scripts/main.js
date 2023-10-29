document.getElementById("flag").play();
const menuList = document.getElementById("menuList");
const content = document.getElementById("content");
for (const child of content.children)
{
    const sizeBorderBottom = 1;
    const sizeClosed = (child.children[0].scrollHeight + sizeBorderBottom) + "px";
    child.style.maxHeight = sizeClosed;
    child.children[0].addEventListener("click", ()=>{
        let isClosed = child.style.maxHeight === sizeClosed;
        if(isClosed){
            child.style.maxHeight = child.scrollHeight + "px";
        }
        else{
            child.style.maxHeight = (child.children[0].scrollHeight + sizeBorderBottom) + "px";
        }
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