let listLi = getById("navList").children;
let boxLi = getById("boxList").children;

for (let i = 0; i < listLi.length; i++) {
    // 自定义index属性
    listLi[i].setAttribute("index", i);
    listLi[i].onclick = function () {

        for (let j = 0; j < listLi.length; j++) {
            listLi[j].removeAttribute("class");
        }
        this.className = "current";

        let number = this.getAttribute("index");
        for (let k = 0; k < boxLi.length; k++) {
            boxLi[k].removeAttribute("class");
        }
        boxLi[number].className = "show";

    }
}

function getById(id) {
    return document.getElementById(id);
}