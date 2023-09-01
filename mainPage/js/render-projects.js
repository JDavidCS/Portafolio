
/*
// TECHNOLOGIES
<li title="HTML">
    <img src="./img/html.svg" alt="html logo">
    <p>Html</p>
</li>

// SOURCES
<li title="github">
    <a href="">
        <img src="./img/github.svg" alt="github logo">
    </a>
</li>
*/
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
    try {
        const $slider = document.querySelector(".slider");
        const data = await importData();
        data.forEach(async (el, index) => {
            const $newCard = await newCard((index+1), el.dataProjectid, el.mainImg, el.name, el.description);
            const $galleryBar = $newCard.querySelector(`.card-gallery__bar`);
            el.images.forEach(src => {
                const $img = document.createElement("img");
                $img.src = src;
                $img.classList = "gallery__bar-img";
                $galleryBar.appendChild($img);
            });
            const $tech = $newCard.querySelector(".collapsed__card-tech ul");
            el.technologies.forEach((el) =>{
                const $li = document.createElement("li");
                const $img = document.createElement("img");
                $img.src = el.img;
                const $p = document.createElement("p");
                $p.innerText = el.name;

                $li.appendChild($img);
                $li.appendChild($p);

                $tech.appendChild($li);
            })

            $slider.appendChild($newCard);
        });
        
    } catch (error) {
        
    }
}

const newCard = async(index, projectid, mainPicture, title, description) =>{

    const stringHTML = `
    <div id="slide${index}" class="slide" data-projectID="${projectid}">
        <label for="input${index}" id="slide${index}"></label>
        <div class="collapsed__card">
            <img src="${mainPicture}" alt="">
            <h2>${title}</h2>
            <div class="collapsed__card-tech">
                <ul>
                </ul>
            </div>
            <div class="collapsed__card-sources">
                <ul><!--
                    <li title="github">
                        <a href="">
                            <img src="./img/github.svg" alt="github logo">
                        </a>
                    </li>-->
                </ul>
            </div>
        </div>
        <div class="description__card">
            <h2>Description</h2>
            <p>
            ${description}
            </p>
            <div class="description__card-gallery">
                <h3>Gallery</h3>
                <div class="card-gallery__bar">
                    <!-- List with the images -->
                </div>
            </div>
        </div>
    </div>
    `;

    const $objectDOM = document.createRange().createContextualFragment(stringHTML);


    return ($objectDOM.children[0]);
}

renderCard();

const $new = newCard();

// console.log($new.querySelector(".collapsed__card"));