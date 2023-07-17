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

const $next = document.querySelector('#btn-next');
const $previous = document.querySelector('#btn-previous');

let $checkedIndex = 0;
let $checkedItem = updateChecked();

$slider.addEventListener('change', ()=>{

    updateAnimation();
    // const $card = document.querySelector(`#slide${$checkedItem.dataset.number}`);

    // $card.classList.add('collapsed');
    // $card.addEventListener('transitionend', function() {
    //     $card.classList.remove('collapsed');
    // });
    // $checkedItem = updateChecked();
});

$next.addEventListener('click', ()=>{

    if(ListInput.length > $checkedIndex+1){
        ListInput[$checkedIndex+1].checked = true;
    }else{
        $checkedIndex = 0;
        ListInput[$checkedIndex].checked = true;
    }

    updateAnimation();
    // const $card = document.querySelector(`#slide${$checkedItem.dataset.number}`);

    // $card.classList.add('collapsed');
    // $card.addEventListener('transitionend', function() {
    //     $card.classList.remove('collapsed');
    // });
    // $checkedItem = updateChecked();
});

$previous.addEventListener('click', ()=>{

    if($checkedIndex != 0){
            ListInput[$checkedIndex-1].checked = true;
    }else{
        $checkedIndex = ListInput.length-1;
        ListInput[$checkedIndex].checked = true;
    }

    updateAnimation();
});

function updateChecked(){
    let checked = null;
    ListInput.forEach((el, key) =>{
        if(el.checked){
            checked = el;
            $checkedIndex = key;
        }
    })
    return checked;
}

function updateAnimation(){
    const $card = document.querySelector(`#slide${$checkedItem.dataset.number}`);

    $card.classList.add('collapsed');
    $card.addEventListener('transitionend', function() {
        $card.classList.remove('collapsed');
    });
    $checkedItem = updateChecked();
}