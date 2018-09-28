let dpr = window.devicePixelRatio;
document.getElementsByName("viewport")[0].setAttribute("content", "width=device-width,initial-scale="+ 1 / dpr);
console.log(document.getElementsByName("viewport")[0].content);
document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByTagName("html")[0].style.fontSize=window.innerWidth /10 + "px";
    document.body.style.fontSize = 16 *dpr + "px";
});


