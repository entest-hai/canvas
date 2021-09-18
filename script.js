document.getElementById("zoomInButton").addEventListener("click",zoomIn);
document.getElementById("zoomOutButton").addEventListener("click",zoomOut);
document.getElementById("image").addEventListener("click",clickImage);

function zoomIn(){
    var scaleDown = 1.1; 
    image = document.getElementById("image");
    var width = parseInt(window.getComputedStyle(image).width);
    var height = parseInt(window.getComputedStyle(image).height);
    image.style.width = scaleDown*width + "px";
    image.style.height = scaleDown*height + "px";
}

function zoomOut(){
    var scaleDown = 0.9; 
    image = document.getElementById("image");
    var width = parseInt(window.getComputedStyle(image).width);
    var height = parseInt(window.getComputedStyle(image).height);
    image.style.width = scaleDown*width + "px";
    image.style.height = scaleDown*height + "px";
}

function clickImage(){
    console.log("click image");

    var width = parseInt(window.getComputedStyle(this).width);
    var height = parseInt(window.getComputedStyle(this).height);
    var scaleDown = 0.9; 
    console.log(width, height);
    
    this.style.width = scaleDown*width + "px";
    this.style.height = scaleDown*height + "px";
}

// get mouse x and y coordiante
window.addEventListener("mousemove", function (e) {
    document.getElementById('x-value').textContent = e.x;
    document.getElementById('y-value').textContent = e.y;
    console.log(`x: ${e.x} | y: ${e.y}`);
}); 