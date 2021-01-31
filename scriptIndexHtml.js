closeButton.addEventListener('click', openOrCloseIndexHtmlImageViewer)
let indexDisplayDiv = document.querySelector(".indexHtmlImageDisplayDiv")

function openOrCloseIndexHtmlImageViewer() {
    // if (indexDisplayDiv.style.display == "none";)

    // document.querySelector(".indexHtmlImageDisplayDiv").style.display = "none";
    document.querySelector(".indexHtmlImageDisplayDiv").style.display = "none";
    // indexDisplayDiv.style.display = "none";

    // if (closeButton.target.class == 'indexHtmlImageDisplayDivImg') {
    //     popupindexDisplayDiv.style.display = 'none';
    //     overlay.style.display = 'none';
    // }
    // if (e.target === openButton) {
    //     popup.style.display = 'block';
    //     overlay.style.display = 'block';
}

indexDisplayDiv.addEventListener("click", closeIfClickOustideOfImg)

function closeIfClickOustideOfImg() {
    // document.querySelector(".indexHtmlImageDisplayDiv").style.display = "none";

}

let previousImageButton = document.querySelector(".previousItemButton")
let nextImageButton = document.querySelector(".nextItemButton")
let indexImagesArray = ["02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", "0.jpg", ]
previousImageButton.addEventListener("click", imageSlideshow)
nextImageButton.addEventListener("click", imageSlideshow)
    // for (let i = 0; i < i)
let indexOfImgArr = 0;

function imageSlideshow() {
    imageDisplay.src = "images/" + indexImagesArray[indexOfImgArr]
    indexOfImgArr++;
    // onclick, indexImagesArray[i++]
}

// indexImagesArray[0] = new Image();
// indexImagesArray[0].src = 'images/02.jpg';

// function nextImage(element) {
//     let img = document.querySelector(element);

//     for (let i = 0; i < indexImagesArray.length; i++) {
//         if (indexImagesArray[i].src == img.src) // << check this
//         {
//             if (i === indexImagesArray.length) {
//                 document.getElementById(element).src = indexImagesArray[0].src;
//                 break;
//             }
//             document.getElementById(element).src = indexImagesArray[i + 1].src;
//             break;
//         }
//     }
// }