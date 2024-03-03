const images = ["assets/menu-icon.svg", "assets/cross.svg"];
let icon = document.querySelector("#bars");
let nav = document.querySelector("nav");

icon.addEventListener("click", () => {
  nav.classList.toggle("showData");
  console.log(nav);
  console.log(icon);
  if (nav.className == "showData") {
    document.getElementById("bars").src = images[1];
  } else {
    document.getElementById("bars").src = images[0];
  }
});


const gallaryContainer = document.querySelector('.gallary-container');
const gallaryControlsContainer = document.querySelector('.gallary-control');
const gallaryItems = document.querySelectorAll('.gallary-item');

class Carousel {
    constructor(container, items) {
        this.carouselContainer = container;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallary-item-1');
            el.classList.remove('gallary-item-2');
            el.classList.remove('gallary-item-3');
        });

        this.carouselArray.slice(0, 3).forEach((el, i) => {
            el.classList.add(`gallary-item-${i + 1}`);
        });
    }            
}


// Copy Div 
var arrayItem = [];
var item1 = gallaryItems[0];
var item2 = gallaryItems[1];
var item3 = gallaryItems[2];

var dot1 = document.getElementById('dot-1');
var dot2 = document.getElementById('dot-2');
var dot3 = document.getElementById('dot-3');
dot1.addEventListener('click',()=>{
    arrayItem[0] = item3;
    arrayItem[1] = item1;
    arrayItem[2] = item2;
    this.arrayItem.forEach(el => {
        el.classList.remove('gallary-item-1');
        el.classList.remove('gallary-item-2');
        el.classList.remove('gallary-item-3');
    });

    this.arrayItem.slice(0, 3).forEach((el, i) => {
        el.classList.add(`gallary-item-${i + 1}`);
    });
    dot1.style.backgroundColor =  "#DB6720";
    dot2.style.backgroundColor =  "#6C696B";
    dot3.style.backgroundColor =  "#6C696B";
});


dot2.addEventListener('click',()=>{
    arrayItem[0] = item1;
    arrayItem[1] = item2;
    arrayItem[2] = item3;
    this.arrayItem.forEach(el => {
        el.classList.remove('gallary-item-1');
        el.classList.remove('gallary-item-2');
        el.classList.remove('gallary-item-3');
    });

    this.arrayItem.slice(0, 3).forEach((el, i) => {
        el.classList.add(`gallary-item-${i + 1}`);
    });
    dot2.style.backgroundColor =  "#DB6720";
    dot1.style.backgroundColor =  "#6C696B";
    dot3.style.backgroundColor =  "#6C696B";
});


dot3.addEventListener('click',()=>{
    arrayItem[0] = item2;
    arrayItem[1] = item3;
    arrayItem[2] = item1;
    this.arrayItem.forEach(el => {
        el.classList.remove('gallary-item-1');
        el.classList.remove('gallary-item-2');
        el.classList.remove('gallary-item-3');
    });

    this.arrayItem.slice(0, 3).forEach((el, i) => {
        el.classList.add(`gallary-item-${i + 1}`);
    });
    dot3.style.backgroundColor =  "#DB6720";
    dot1.style.backgroundColor =  "#6C696B";
    dot2.style.backgroundColor =  "#6C696B";

});
const exampleCarousel = new Carousel(gallaryContainer, gallaryItems);

