const parallax = document.querySelectorAll("#layer");
const header = document.querySelector("#header");
const padding = document.querySelector(".Layers");
const main = document.querySelector("main");


let float = false;

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
    header.firstElementChild.style.fontSize = 'calc(3vmin + 0.2em)';

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
    

    parallax[0].style.transform = 'translateY(' + scrollTop * 0.6 + 'px)';
    parallax[2].style.transform = 'translateY(' + scrollTop * 0.3 + 'px)';
    parallax[3].style.transform = 'translateY(' + scrollTop * 0.3 + 'px)';
    parallax[1].style.transform = 'translateY(' + scrollTop * 0.3 + 'px)';
    parallax[4].style.transform = 'translateY(' + scrollTop * 0.1 + 'px)';

    
    // if(scrollTop > 65 && !float) {
    //     headerFloat();
    //     console.log("cambio");
    // }
    // else if(scrollTop < 65 && float) {
    //     headerAbsolute();
    //     console.log("cambio");
    // } 

}

window.addEventListener('scroll', Scroll);