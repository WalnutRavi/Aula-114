var nosex=""
var nosey=""
function preload(){

}
function setup(){
canvas=createCanvas(750,550);
canvas.center()
video=createCapture(VIDEO)
video.hide()

posenet=ml5.poseNet(video,modelLoaded)
posenet.on("pose",gotPoses)
}
function modelLoaded(){
    console.log("Modelo carregado")
}
function draw(){
    image(video,0,0,750,550)
    circle(nosex,nosey,45)
}
function gotPoses(results){
    if(results.length>0){
        // console.log(results)
        nosex=results[0].pose.nose.x 
        nosey=results[0].pose.nose.y 

    }
}
