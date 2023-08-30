// import jsonData from "./projects-data/data.json";

// For now, I'll only render the images of the project
// const $galleryBar = document.querySelector(".card-gallery__bar");

// console.log(jsonData)

const importData = async() =>{
    try{
        const res = await fetch("js/projects-data/data.json");
        const jsonData = await res.json(); 
        return jsonData.projects; 
    }catch(err){
        console.error('Error fetching data:', err);
    }
}

const renderCard = async () =>{
    const data = await importData();
    data.forEach(el => {
        const $galleryBar = document.querySelector(`[data-projectid="${el.dataProjectid}"] .card-gallery__bar`);
        el.images.forEach(src => {
            let $img = document.createElement("img");
            $img.src = src;
            $img.classList = "gallery__bar-img";
            $galleryBar.appendChild($img);
        })
    });
}

const newCard = (index, projectid, mainPicture, title) =>{

    const stringHTML = `
    <div id="slide1" class="slide" data-projectID="1">
        <label for="input1" id="slide1"></label>
        <div class="collapsed__card">
            <img src="https://cdn.pixabay.com/photo/2017/11/29/18/54/leaf-2986837_1280.jpg" alt="">
            <h2>Portfolio 'n Personal Image</h2>
            <div class="collapsed__card-tech">
                <ul>
                    <li title="HTML">
                        <img src="./img/html.svg" alt="html logo">
                        <p>Html</p>
                    </li>
                    <li title="CSS">
                        <img src="./img/css.svg" alt="CSS logo">
                        <p>css</p>
                    </li>
                    <li title="JavaScript">
                        <img src="./img/javascript.svg" alt="JS logo">
                        <p>js</p>
                    </li>
                </ul>
            </div>
            <div class="collapsed__card-sources">
                <ul>
                    <li title="github">
                        <a href="">
                            <img src="./img/github.svg" alt="github logo">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="description__card">
            <h2>Description</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nulla non. Ullam nihil provident fuga ea illum. Aspernatur, corrupti! Cupiditate ipsam voluptatem exercitationem! Molestiae porro ea maxime doloremque, deserunt vel.
            </p>
            <div class="description__card-gallery">
                <h3>Gallery</h3>
                <div class="card-gallery__bar">
                    <!-- List with the images -->
                    <!-- <img src="https://images.unsplash.com/photo-1690336729872-6e8b665aea8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" class="gallery__bar-img"> -->
                    
                    <!-- <div class="gallery__bar-img"></div>
                    <div class="gallery__bar-img"></div>
                    <div class="gallery__bar-img"></div> -->
                </div>
            </div>
        </div>
    </div>
    `;

    const $objectDOM = document.createRange().createContextualFragment(stringHTML);


    return ($objectDOM.children[0]);

    // const $container = document.createElement("div").classList.add("slide");
    //     $container.id = `slide${index}`;
    //     $container.dataset.projectid = projectid;

    // const $labelOver = document.createElement("label");
    //     $labelOver.setAttribute("for", `input${index}`);
    //     $labelOver.id = $container.id;
    // $container.appendChild($labelOver);

    // const $collapsedContainer = document.createElement("div").classList.add("collapsed__card");

    // $container.appendChild($collapsedContainer);

    // const $descriptionContainer = document.createElement("div").classList.add("description__card");
    // $container.appendChild($descriptionContainer);


}

renderCard();

const $new = newCard();
;
console.log($new.querySelector(".collapsed__card"));