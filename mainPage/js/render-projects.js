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
        console.log(el.images)
    });
}

renderGallery();