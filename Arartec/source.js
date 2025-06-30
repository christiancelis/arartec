

let a = document.querySelectorAll(".cl")
let c = document.querySelectorAll(".inactivo")



a.forEach(function(item, indi){
    let b = item.className
    
   c.forEach(function(ite,i){ 
        item.addEventListener("click",()=>{
            if(ite.className=="inactivo" && i == indi){
                ite.classList.remove("inactivo")
                ite.classList.add("activo")
                item.classList.add("girar")
            }
            else{
                if(ite.className=="activo"){
                    ite.classList.remove("activo")
                    ite.classList.add("inactivo")
                    item.classList.remove("girar")
                }
            }
        })

     })
 })

const track = document.querySelector(".slider-track");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;
const visibleItems = 1;
const itemWidth = 360; // Ancho de .product + margen (200 + 2*10)

next.addEventListener("click", () => {
  const maxIndex = track.children.length - visibleItems;
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
});

prev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}


const desplegable = document.querySelector("#desplegable");
const menuHamburguesa = document.querySelector(".menu-hamburguesa-button");

menuHamburguesa.addEventListener("click", () => {
  if (desplegable.classList.contains("desplegado")) {
    desplegable.classList.remove("desplegado");
    desplegable.classList.add("oculto");
  } else {
    desplegable.classList.remove("oculto");
    desplegable.classList.add("desplegado");
  }
});