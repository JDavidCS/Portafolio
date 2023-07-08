// let counter = 1;

// setInterval(()=>{
//     document.getElementById("radio" + counter).checked=true;
//     counter++;
//     if(counter > 4){
//         counter = 1;
//     }
// }, 3000);

// addEventListener("click", (e)=> console.log(e.target));



const ListInput = document.querySelectorAll("[name=radio-btn]");
const ListSlide = document.querySelectorAll(".card");
const $slider = document.querySelector(".slider");

let $checkedItem = updateChecked();

$slider.addEventListener('change', (ev)=>{

    const $card = document.querySelector(`#slide${$checkedItem.dataset.number}`);

    $card.classList.add('collapsed');
    $card.addEventListener('transitionend', function() {
        $card.classList.remove('collapsed');
    });
    $checkedItem = updateChecked();
});

function updateChecked(){
    let checked = null;
    ListInput.forEach(el =>{
        if(el.checked){
            console.log(el);
            checked = el
        }
    })
    return checked;
}