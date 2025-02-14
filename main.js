function rect() {
    const canvas = document.getElementById("coolCanvas")
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = "blue";
    ctx.fillRect(100, 100, 150, 75)
}

function make() {
    const canvas = document.getElementById("coolCanvas")
    const ctx = canvas.getContext("2d")
    ctx.moveTo(200, 200)

    ctx.lineTo(300, 300)
    ctx.lineTo(100, 300)
    ctx.lineTo(200, 200)
    ctx.stroke()
}

function grad() {
    const canvas = document.getElementById("coolCanvas")
    const ctx = canvas.getContext("2d")
    const gradi = ctx.createLinearGradient(650, 200, 950, 0)
    gradi.addColorStop(0, "red")
    gradi.addColorStop(0.5, "pink")
    gradi.addColorStop(1, "lightpink")
    ctx.fillStyle = gradi
    ctx.fillRect(700, 200, 400, 200)
}

function circle() {
    const canvas = document.getElementById("coolCanvas")
    const ctx = canvas.getContext("2d")

    ctx.beginPath()
    ctx.arc(600, 100, 50,0 , 2* Math.PI)
    ctx.fillStyle = "violet"
    ctx.fill()
    ctx.stroke()
}

function rhombus() {
    const canvas = document.getElementById("coolCanvas")
    const ctx = canvas.getContext("2d")
    ctx.moveTo(200, 500)

    ctx.lineTo(300, 550)
    ctx.lineTo(200, 600)
    ctx.lineTo(100, 550)
    ctx.lineTo(200, 500)
    ctx.stroke()
}


window.onload = function()
{
    rect();
    make();
    grad();
    circle();
    rhombus()
}