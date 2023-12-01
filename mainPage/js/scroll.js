const parallax = document.querySelectorAll("#layer");
const header = document.querySelector("#header");
const padding = document.querySelector(".Layers");
const main = document.querySelector("main");
const downContent = document.querySelector("#downContent");

let float = false;
let light = false;

// const heightMain = ((-1.25 * main.offsetHeight) + 850);
// const heightMain = (main.offsetHeight * 0.25);

// console.log(heightMain, " ", main.offsetHeight)

// padding.style.paddingTop = heightMain + 'px';

parallax.forEach(layer => {
    layer.style.bottom = 0;
});

function headerFloat(){
    header.style.position = 'fixed';
    header.style.width = '40%';
    header.style.left = '0px';
    header.firstElementChild.style.fontSize = 'calc(2vmin + 0.3em)';

    float = true;
}
function headerAbsolute(){
    header.style.position = 'absolute';
    header.style.width = '100%';
    header.firstElementChild.style.fontSize = 'calc(3vmin + 0.2em)';

    float = false;
}

function Scroll(){
    let scrollTop = document.documentElement.scrollTop;
    

    parallax[0].style.transform = 'translateY(' + scrollTop * 0.5 + 'px)';
    parallax[2].style.transform = 'translateY(' + scrollTop * 0.3 + 'px)';
    parallax[3].style.transform = 'translateY(' + scrollTop * 0.3 + 'px)';
    parallax[1].style.transform = 'translateY(' + scrollTop * 0.3 + 'px)';
    parallax[4].style.transform = 'translateY(' + scrollTop * 0.1 + 'px)';

    
    if(scrollTop > 65 && !float) {
        headerFloat();
    }
    else if(scrollTop < 65 && float) {
        headerAbsolute();
    }
    if(scrollTop > (window.innerHeight * 0.7) && !light){
        downContent.style.backgroundColor = "#050335";
        light = true
    } 
    else if(scrollTop < (window.innerHeight * 0.3) && light){
        downContent.style.backgroundColor = "#000";
        light = false
    }

}

window.addEventListener('scroll', ()=>{
    if(document.documentElement.scrollTop < window.innerHeight + 50){
        Scroll();
    }
});
Scroll();