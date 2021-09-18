// get canvas 
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// get context 
var context = canvas.getContext('2d');
// style 
context.fillStyle = 'rgba(255,0,0,0.5)';
// draw a box 
context.fillRect(100, 100, 100, 100);
context.fillStyle = 'rgba(255,0,0,0.5)';
context.fillRect(400, 100, 100, 100);
context.fillStyle = 'rgba(255,0,0,0.5)';
context.fillRect(300, 300, 100, 100);
// raw a line 
context.beginPath();
context.moveTo(50,300);
context.lineTo(300,100);
context.lineTo(400,300);
context.strokeStyle = "#fa34a3";
context.stroke();
// arc 
for (var i=0 ; i < 30; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    context.beginPath();
    context.strokeStyle = 'blue';
    context.arc(
        x, 
        y, 
        30,
        0,
        Math.PI * 2, 
        false
    );
    context.stroke();
}