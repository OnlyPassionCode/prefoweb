document.getElementById("flag").play();
const menuList = document.getElementById("menuList");
const content = document.getElementById("content");
for (const child of content.children)
{
    console.log(child);
    child.addEventListener("click", ()=>{
        let isShow = true;
        for(const nameClass of child.classList)
        {
            if(nameClass !== "show") continue;
            isShow = false;
            break;
        }
        if(isShow)
            child.classList.add("show");
        else
            child.classList.remove("show");
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