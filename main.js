document.addEventListener("DOMContentLoaded", (e) => {

    let inventario = document.querySelector(".section__inventary")
    let almacen = document.querySelector(".section__hollow")

    let cajas = document.querySelectorAll(".inventary__box")
    let huecos = document.querySelectorAll(".hollow__box")

    cajas.forEach((caja, i) => {
        caja.setAttribute("id", ("caja" + i))

        caja.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("id", e.target.id)
        })

    })

    huecos.forEach((hueco) => {
        hueco.addEventListener("dragover", e => {
            e.preventDefault()
        })
        hueco.addEventListener("drop", (e) => {
            e.preventDefault();

            let cajaId = e.dataTransfer.getData("id")
            
            let caja = document.getElementById(cajaId)

            e.target.appendChild(caja)
        })
    })


})