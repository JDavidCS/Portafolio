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

const renderGallery = async () =>{
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

renderGallery();