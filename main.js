function setup() {
    video=createCapture(VIDEO);
    video.size(600,400);
    video.position(150,150)
    
    canvas=createCanvas(550,500);
    canvas.position(750,100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    background('#FF0000');
}

function modelLoaded() {
    console.log('poseNet is initialized');
}

function gotPoses(results) {
  if(results.length>0){
    console.log(results);
  }
}