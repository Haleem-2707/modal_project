"use srtict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btncloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");




for (let i = 0; i < btnsOpenModal.length; i++)
console.log(btnsOpenModal[i].addEventListener ("click" , function() {
    console.log("Youre welcome")
     
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

}))

 document.querySelector(".close-modal").addEventListener("click", function() {

    modal.classList.add("hidden");
    overlay.classList.add("hidden");
 })

 document.querySelector(".overlay").addEventListener("click" , function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
 })

//  Refactoring code

// const openModal = function() {
//     console.log("Youre welcome")
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
// }



// for (let i = 0; i < btnsOpenModal.length; i++)
// btnsOpenModal[i].addEventListener ("click" , openModal );


// const closeModal = function() {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
// }

// overlay.addEventListener("click", closeModal);
// btnCloseModal.addEventListener("click", closeModal);