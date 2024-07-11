coco = "";
video = "";
objects = [];
function setup() {
    canvas = createCanvas(400, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(400,300);
video.hide();
}
function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "objects are detecting";
ininput = document.getElementById("inputer").value;
}

function modelLoaded() {
    console.log("model loading");
    status = true;
}
function draw() {
    image(video, 0, 0, 400, 300);
}