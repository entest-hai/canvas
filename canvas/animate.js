// get cavans 
canvas = document.querySelector("canvas");
context = canvas.getContext('2d');
// set canvas width and height 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// mouse 
// listen to mouse move
var mouse  = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
// var minRadius = 2; 

var colorArray = [
    '#2C3E50',
    '#E74C3C',
    '#ECF0F1',
    '#3498DB',
    '#2980B9'
]; 

// circle 
function Circle(x,y, dx, dy, radius) {
    this.x = x; 
    this.y = y; 
    this.dx = dx; 
    this.dy = dy; 
    this.radius = radius; 
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)];

    this.draw = function() {
        context.beginPath();
        context.arc(
            this.x, 
            this.y, 
            this.radius, 
            0, 
            Math.PI * 2, 
            false
        ); 
        // context.strokeStyle = 'blue';
        // context.stroke();
        context.fillStyle = this.color;
        context.fill();
    }

    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx; 
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx; 
        this.y += this.dy; 

        // interactive with mouse 
        if (mouse.x - this.x < 50 
            && mouse.x - this.x > -50 
            && mouse.y - this.y < 50 
            && mouse.y - this.y > -50
            ) {
            if (this.radius < maxRadius){
                this.radius += 1; 
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1; 
        }

        this.draw();
    }
}

// multiple circiles 
var circle = new Circle(200, 200, 3, 3, 30);

var circleArray = [];
for (var i = 0; i < 500; i++){
    var radius = Math.random() * 3 + 1; 
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius; 
    var dx = (Math.random() - 0.5) * 5; 
    var dy = (Math.random() - 0.5) * 5; 
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

// init 
function init(){
    console.log("clean and init circle array");
    circleArray = [];
    for (var i = 0; i < 500; i++){
        var radius = Math.random() * 3 + 1; 
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius; 
        var dx = (Math.random() - 0.5) * 5; 
        var dy = (Math.random() - 0.5) * 5; 
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

// animate 
function animate(){
    console.log('animate');
    requestAnimationFrame(animate);
    context.clearRect(
        0,
        0,
        innerWidth,
        innerHeight,
    );
    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

animate();



window.addEventListener('mousemove', function(event){
    mouse.x = event.x; 
    mouse.y = event.y; 
    console.log('mousemove');
})

// listen to window resize 
window.addEventListener('resize', function(){
    console.log("resize screen");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();

});