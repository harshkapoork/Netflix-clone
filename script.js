const question = document.querySelector(".question")
const show = document.querySelector(".showtext")
let toggle= true


question.addEventListener
    ("click", () => {
   

        if (toggle) {
            show.style.display = "flex"
            question.style.height="auto"
            toggle=false
        }
        else {
            show.style.display = "none"
            toggle=true
        }


})