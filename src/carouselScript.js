const imageShowing = document.getElementById("imgOnShowRoom");
const previousBtn = document.getElementById("previousImg");
const nextBtn = document.getElementById("nextImg");

const images = ["./funnyImages/011etinibfx51.webp","./funnyImages/8c2b7cd3af71c5f2c9a0e8d14a083b63.jpeg","./funnyImages/21dbb977cd41b4905164bca8388e43a5.jpeg","./funnyImages/df692e9e2c3953d543832a7defe41f46.webp"];
let currentImage = 0;

function updateImage(){
    imageShowing.src = images[currentImage];
}

previousBtn.addEventListener("click",()=>{
    if(currentImage === 0){
        currentImage = images.length;
    }
    currentImage --;
    updateImage();
});

nextBtn.addEventListener("click",()=>{
    if(currentImage === images.length-1){
        currentImage = 0;
    }
    currentImage ++;
    updateImage();
});