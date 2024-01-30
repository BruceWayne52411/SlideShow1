console.log("js loaded")

// setInterval will call a function every certain time(r)
// every Nms

// let count = 0;

// function printCountAndIncrement(){
//     count++;
//     console.log(count);
// }

// //call our function every 3 seconds
// setInterval(printCountAndIncrement, 3000);

let imageUrls = [
    "./images/batman1.jpg",
    "https://as2.ftcdn.net/v2/jpg/03/89/39/09/1000_F_389390965_lwqVX10TBdFH2WMBH6GGF8pcNiOhzfnb.jpg"
]

const prevButton = document.getElementById("prev-button")
const nextButton = document.getElementById("next-button")

prevButton.addEventListener("click", () => {
    updateImage("prev");
})

nextButton.addEventListener("click", () => {
    updateImage("next");
})

const slideShowImage = document.getElementById("slide-show-image");

let currentIndexImage = 0;

// Move to the next image update the dom to show keep track of the current index
function updateImage(direction){
    if (direction == "next"){
        currentIndexImage++;
    } else if("prev"){
        currentIndexImage--;
    } else (currentIndexImage++)

    if (currentIndexImage >= imageUrls.length){
        currentIndexImage = 0;
    }
    if(currentIndexImage < 0){
        currentIndexImage = imageUrls[currentIndexImage]
    }

    slideShowImage.src = imageUrls[currentIndexImage];
}

setInterval(updateImage, 5000);