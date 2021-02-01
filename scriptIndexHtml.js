closeButton.addEventListener('click', openOrCloseIndexHtmlImageViewer)
let indexDisplayDiv = document.querySelector(".indexHtmlImageDisplayDiv")

function openOrCloseIndexHtmlImageViewer() {

    document.querySelector(".indexHtmlImageDisplayDiv").style.display = "none";

}

indexDisplayDiv.addEventListener("click", closeIfClickOustideOfImg)

function closeIfClickOustideOfImg() {


}

let previousImageButton = document.querySelector(".previousItemButton")
let nextImageButton = document.querySelector(".nextItemButton")
let indexImagesArray = ["02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", ]
previousImageButton.addEventListener("click", imageSlideshow)
nextImageButton.addEventListener("click", imageSlideshow)

let indexOfImgArr = 0;

function imageSlideshow() {
    imageDisplay.src = "images/" + indexImagesArray[indexOfImgArr]
    indexOfImgArr++;

}