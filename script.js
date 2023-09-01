const firstForm = document.querySelector(".rating-state")
const secondForm = document.querySelector(".thank-you")
const submitButton= document.querySelector(".submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")
submitButton.addEventListener("click", () => {
    secondForm.classList.remove("hidden")
    firstForm.style.display="none"
})
rates.forEach((rate)=>{
    rate.addEventListener("click", ()=>{
        rating.innerHTML=rate.innerHTML
    })
})