
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
        const $phoneProjects = document.querySelector(".projects_phone");
        const data = await importData();
        data.forEach(async (el, index) => {
            const $newCard = await newCard(1, (index+1), el.dataProjectid, el.mainImg, el.name, el.description);
            const $newCard_phone = await newCard(2, (index+1), el.dataProjectid, el.mainImg, el.name, el.description);
            const $galleryBar = $newCard.querySelector(`.card-gallery__bar`);
            el.images.forEach(src => {
                const $img = document.createElement("img");
                $img.src = src;
                $img.classList = "gallery__bar-img";
                $galleryBar.appendChild($img);
            });
            const $tech = $newCard.querySelector(".collapsed__card-tech ul");
            const $phoneTech = $newCard_phone.querySelector(".collapsed__card-tech ul");
            el.technologies.forEach((el) =>{
                const $li = document.createElement("li");
                const $img = document.createElement("img");
                $img.src = el.img;
                const $p = document.createElement("p");
                $p.innerText = el.name;

                $li.appendChild($img);
                $li.appendChild($p);

                $tech.appendChild($li);
                $phoneTech.appendChild($li.cloneNode(true));
            });
            const $sources = $newCard.querySelector(".collapsed__card-sources ul");
            const $phoneSources = $newCard_phone.querySelector(".collapsed__card-sources ul");
            el.sources.forEach((el)=>{
                const $li = document.createElement("li");
                const $a = document.createElement("a");
                $a.href = el.src;
                const $img = document.createElement("img");
                $img.src = el.img;
                $a.appendChild($img);
                $li.appendChild($a);

                $sources.appendChild($li);
                $phoneSources.appendChild($li.cloneNode(true));
            })

            $slider.appendChild($newCard);
            $phoneProjects.appendChild($newCard_phone);
        });

        console.log("RENDERIZADO");
        import("./slider-buttons.js")
        
    } catch (error) {
        
    }
}

const newCard = async(option, index, projectid, mainPicture, title, description) => {

    let stringHTML;
    if(option == 1){
        stringHTML = `
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
    }
    else{
        stringHTML = `
        <div class="phone__card" data-projectName="">
            <div class="collapsed__card">
                <img src="${mainPicture}" alt="">
                <h2>${title}</h2>
                <div class="collapsed__card-tech">
                    <ul>
                        
                    </ul>
                </div>
                <div class="collapsed__card-sources">
                    <ul>
                        
                    </ul>
                </div>
            </div>
        </div>
        `;
    }

    const $objectDOM = document.createRange().createContextualFragment(stringHTML);


    return ($objectDOM.children[0]);
}

document.addEventListener("DOMContentLoaded", function(){
    renderCard();
});


// console.log($new.querySelector(".collapsed__card"));