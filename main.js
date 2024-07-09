let items = document.querySelectorAll(".item");
let body = document.querySelector("body");
items.forEach((el) => {
    let attr = el.getAttribute("data-bg");
    el.style.background = attr;
    el.addEventListener("click", function () {
        body.setAttribute("data-bg", attr);
        let bodyAttr = body.getAttribute("data-bg");
        body.style.background = bodyAttr
    });
});