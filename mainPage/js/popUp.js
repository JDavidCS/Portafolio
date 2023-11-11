const $popUpBack = document.querySelector(".popUp-back");
const $popUpWindow = document.querySelector(".popUp-window");
const $img = document.querySelector(".popUp-screen__img");
const $popUpClose = document.querySelector(".popUp-header__close");
const $nextButton = document.querySelector(".popUp-screen__next");
const $previousButton = document.querySelector(".popUp-screen__previous");


let $currentIMG = undefined;
const galleryList = document.querySelectorAll(".card-gallery__bar");

galleryList.forEach(el => console.log(el));

$popUpBack.addEventListener("click", ()=>{$popUpBack.style.display = "none";});
$popUpClose.addEventListener("click", ()=>{$popUpBack.style.display = "none";});

$popUpWindow.addEventListener("click", (event)=>{
    event.stopPropagation();
});

galleryList.forEach(el =>{
    el.addEventListener("click", handlePopUp);
});

$nextButton.addEventListener("click", (ev)=>{
    // console.log($currentIMG.nextElementSibling.src)
    if($currentIMG.nextElementSibling != null){
        $img.src = $currentIMG.nextElementSibling.src;
        $currentIMG = $currentIMG.nextElementSibling;
    }
});
$previousButton.addEventListener("click", (ev)=>{
    // console.log($currentIMG.nextElementSibling.src)
    if($currentIMG.previousElementSibling != null){
        $img.src = $currentIMG.previousElementSibling.src;
        $currentIMG = $currentIMG.previousElementSibling;
    }
});

function handlePopUp(ev){
    if(ev.target.nodeName.toLocaleLowerCase() == 'img'){
        console.log([...ev.target.parentNode.children]);
        console.log(ev.target);
        $currentIMG = ev.target;
        $popUpBack.style.display = "flex";
        $img.src = ev.target.src;
    }
}