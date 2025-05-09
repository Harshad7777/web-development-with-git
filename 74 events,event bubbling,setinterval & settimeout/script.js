let button = document.getElementById("btn")

button.addEventListener("click", () => {
    // alert("I was clicked, yayy!")
    document.querySelector(".box").innerHTML = "<b>yayy you were clicked</b> Enjoy your click!"

})

button.addEventListener("contextmenu", () => {
    alert("Dont hack us by Right clicking")
})


document.addEventListener("keydown", (e) => {
    console.log(e.key,e.keyCode)
}
)