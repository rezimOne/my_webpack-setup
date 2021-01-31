import image from "./image.png";

export default function myFunction3(){
    const img = document.createElement("img");
    img.className = 'face-img';
    img.src = image;
    return img;
}
