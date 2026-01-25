const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here

const nextButton = document.querySelector("#forward-btn");
const backButton = document.querySelector("#backward-btn");
const catImage = document.querySelector("#carousel-img");
let pos =0;

// nextButton.addEventListener("click", () => {
//    if(pos === images.length-1){
//     pos = pos;
//    }else{
//     pos=pos+1;
//    }
//    catImage.src = images[pos];
// })

// backButton.addEventListener("click", () => {
//     if(pos!=0){
//         pos=pos-1;
//     }else{
//         pos=pos;
//     }
//     catImage.src = images[pos];
// })

function sliderShowForward(){
    if(pos === images.length-1){
        pos =0;
    }else{
        pos = pos+1;
    }
    catImage.src = images[pos];
}

const slider = setInterval(sliderShowForward, 1000);