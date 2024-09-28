const buttons = document.querySelectorAll("#image-picker li")
const img = document.querySelector("#product-image")

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected")
    })
    const button = e.target
    button.querySelector(".color").classList.add("selected")
    const id = button.getAttribute("id")
    img.classList.add("changing")
    img.setAttribute("src", `img/iphone_${id}.jpg`)
    setTimeout(() => {
      img.classList.remove("changing")
    }, 200)
    

    
  })
})