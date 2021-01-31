// SCRIPT POUR NAVBAR

const navBar = document.querySelector('#main');

function fixedNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = navBar.offsetHeight + 'px'
        document.body.classList.add('fixed-nav')
    } else {
        document.body.classList.remove('fixed-nav')
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixedNav);
const topOfNav = navBar.offsetTop;




// SCRIPT FOR INDEX HTML VNCENT


let imageElement = document.querySelectorAll('img')
let indexImg = document.querySelectorAll(".indexImg")
let imageDisplay = document.querySelector(".productImg")
let img = document.querySelectorAll(".productCard")
let indexHtmlImageDisplayDivImg = document.querySelector(".indexHtmlImageDisplayDivImg")
let indexHtmlImageDisplayDiv = document.querySelector(".indexHtmlImageDisplayDiv")
let sideContainerImgArray = [];


// closeButton onclick close parent div
let closeButton = document.querySelector('.closeButton')

// closeButton.addEventListener("click", function)

// var x = document.getElementById("myDIV");
// if (x.style.display === "none") {
//   x.style.display = "block";
// } else {
//   x.style.display = "none";
// indexHtmlImageDisplayDiv
// style.display = 'none';
// indexHtmlImageDisplayDiv.style.display = "none";

// document.querySelector(".indexHtmlImageDisplayDiv").style.display = "block";

// if page != index.html
// x.removeEventListener("click", Respond);

// SCRIPT IMPORTANT POUR INDEX
// closeButton.addEventListener('click', openOrCloseIndexHtmlImageViewer)
// let indexDisplayDiv = document.querySelector(".indexHtmlImageDisplayDiv")

// function openOrCloseIndexHtmlImageViewer() {
//     // if (indexDisplayDiv.style.display == "none";)

//     document.querySelector(".indexHtmlImageDisplayDiv").style.display = "none";
//     // indexDisplayDiv.style.display = "none";
// }



// (param1, paramN) => {
//     let a = 1;
//     return a + param1 + paramN;
//  }

// document.getElementById("myBtn").addEventListener("click", function() {
//     document.getElementById("demo").innerHTML = "Hello World";
// });


// function toggleDisplayImageFullscreen(element) {
//     element.classList.toggle("fullscreenImg");
// }


// let indexImage = document.querySelectorAll(
// "click", function {

// })

// END OF SCRIPT FOR INDEX HTML VNCENT


// SCRIPT FOR PRODUITS.HTML

// let previousProductButton = document.querySelector(".previousItemButton");
// let nextProductButton = document.querySelector(".nextItemButton");

// previousItemButton.addEventListener("click", previousOrNextItem) // X

// previousProductButton.addEventListener("click", previousOrNextItem)
// nextProductButton.addEventListener("click", previousOrNextItem)

// let productArray = [0, 1, 2, 3, 4];
// let productIndex = 0;

// let productTemplate = {
//     title: "TITLE",
//     description: "DESCRIPTION",
//     price: 30,
//     img: "PATH TO IMG",
//     alt: "ALT DESC",

// }


/*
function previousOrNextItem(input) { // previous or next

    if (input == nextItemButton) { // Si clic sur next
        if (prodcutArray[productIndex] == productArray.length) { // Si nous sommes au dernier produit de la liste, remettre l'index à 0 (début de liste)
            productIndex = 0;
        }
        productIndex++;
    } else { // input is nextItemButton
        if (prodcutArray[productIndex] == productArray[0]) { // Si nous sommes au premier produit de la liste, mettre l'index au dernier index (fin de liste)
            productIndex = productArray.length;
        }
        productIndex--;
    }
}
*/

// CLICK TO FULLSCREEN IMG

// var foo = document.getElementById("foo");
// if (foo.hasAttribute("bar")) {
//     // do something
// }
// document.getElementById("myBtn").addEventListener("click", function() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   });

// let div = document.querySelector('div');
// div.classList.contains('secondary'); // true

// var images = document.querySelector(".sideContainerImg")
// images.addEventListener("click", toggleClass); <<<<<


// var imageElement = document.querySelector(".productImg")
// imageElement.addEventListener("click", toggleClass);
// ^^^^^^^

// var imageElement = document.querySelector("img")
// if (imageElement.hasAttribute("class="   
//         fullscreemImg ""))

// if (imageElement.classList.contains("fullscreenImg")) {

//     imageElement.classList.remove("fullscreenImg");

// } else {
//     imageElement.classList.add("fullscreenImg");
// }

// imageElement.classList.toggle("fullscreenImg");

// ) }

// function toggleClass() {
//     imageElement.classList.toggle("fullscreenImg");
// }


// >>>>>

// let imagePlaceholder = document.querySelector('.imagePlaceholder') <<<


// imageElement.forEach((e) => {
//     e.addEventListener("click", () => {
//         // e.innerHTML = `<img class="productImg img" src="${this.product[img]}" alt="${this.product[alt]}">`
//         // e.innerHTML = `<img src="images/02.jpg" alt="ilustration" height="370px" class="img">` <<
//     })
// })


// let img = document.querySelectorAll(".img")



img.forEach((e) => {
    e.addEventListener("click", () => {
        // e.classList.toggle("fullscreenImg")
        // e.displayImage();
        // imageDisplay.src = "images/02.jpg"
        // e.src = "images/02.jpg"
        // img.src = "images/02.jpg";

        // e.setAttribute("src", "images/04.jpg");
        // img.setAttribute("src", "images/04.jpg");

        // imageDisplay.setAttribute("src", "images/04.jpg");
        // imgElSrc = e.src // get target img src

        imageDisplay.src = e.src; // set imageDisplay src as target src


        // <img class="productImg" src="images/07.jpg" alt="">
    })
})


// image.src = "IMAGE URL/PATH"


// on click, pop gallery viewer

// On click, send image to img display



// Get all img in sideContainer and put then in arr
// arr0 cycle


// img.forEach((e) => {

//     // sideContainerImgArray.push(e.src)


// })


// function toggleClass() {
//     imageElement.classList.toggle("fullscreenImg");
// }

// div.classList.add("foo", "bar", "baz");
// div.classList.remove("foo", "bar", "baz");


// CLICK TO DISPLAY IMG FULLSCREEN IN INDEX.HTML

indexImg.forEach((el) => {
    el.addEventListener("click", () => {

        // elementImgSrc = el.src;
        indexHtmlImageDisplayDivImg.src = el.src;
        indexDisplayDiv.style.display = "flex";
        // indexHtmlImageDisplayDiv.style.display = "flex";
    })
})




// CC ***********************************

function ContentManager(products) {

    this.products = products;
}

ContentManager.prototype.generateProducts = function() {


    let cible = document.getElementById('productCards');

    this.products.forEach(element => {


        // let moyenne = this.ratingAverage(element.ratings);

        // let span = "";
        // for (let i = 0; i < moyenne; i++) {
        //     span += `<span class='fa fa-star'></span>`;
        // }

        // let domElement = `<figure>
        //             <img alt='${element.title}'
        //                 src='${element.img}'>
        //             <figcaption>
        //                 <h3>${element.title}</h3>
        //                 <span class='tag'>${element.subtitle}</span>
        //                 <p>${element.resume}</p>
        //                 <div class='rating'>
        //                    ${span} 
        //                 </div>
        //             </figcaption>
        //         </figure>`;

        // cible.innerHTML += domElement;

    });


}

// ContentManager.prototype.ratingAverage = function(ratings) {

//     let somme = 0;

//     for (let index = 0; index < ratings.length; index++) {
//         const element = ratings[index];
//         somme += element
//     }

//     let moyenne = Math.floor(somme / ratings.length);

//     return moyenne;
// }

let contentManager = new ContentManager([
    { title: "A Taste of the Kitchen", subtitle: "Served Family Style", resume: "Vel nam odio dolorem, voluptas sequi minus quo tempore, animi est quia earum maxime. Reiciendisquae repellat, modi non, veniam.", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/first-course.jpg", ratings: [5, 3, 5, 4, 5, 3, 4, 1] }
]);

// contentManager.generateProducts();




// END OF SCRIPT FOR PRODUITS.HTML