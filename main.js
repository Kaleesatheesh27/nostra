let menubar=document.getElementById("menu-bar");
let close=document.querySelector("#side-close");
 menubar.addEventListener("click",function(){
document.querySelector(".side-nav").style.left="0"
 });
 close.addEventListener("click",function(){
document.querySelector(".side-nav").style.left="-40%"
 })
//  alert fuction
const popClose=document.getElementById("pop-close")
popClose.addEventListener("click",function(){
    document.querySelector(".alert").style.display="none"
})
// slide show
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("left-arrow");
const nextBtn = document.getElementById("right-arrow");
let current = 0;
function showSlide(index) {
    console.log(index)
    slides.forEach((slide, i) => {
        console.log(slide,i)
      slide.style.display = i === index ? "block" : "none";
    });
  }
  nextBtn.addEventListener("click",function(){
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  })
  prevBtn.addEventListener("click",function(){
   
  current = (current + 1) % slides.length;
    showSlide(current);
    
  })
  
  showSlide(current);