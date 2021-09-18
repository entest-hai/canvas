canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

console.log(canvas.width, canvas.height)
var context = canvas.getContext('2d')
context.strokeStyle = "black"
context.lineWidth = 5
context.beginPath()
context.moveTo(0,10)
context.lineTo(200,10)
context.stroke()