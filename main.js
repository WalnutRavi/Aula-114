var nosex=""
var nosey=""
function preload(){
    mask=loadImage("mascara dekuDark.png")

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
    //circle(nosex,nosey,45)
    image(mask,nosex,nosey,150,150)
}
function gotPoses(results){
    if(results.length>0){
        // console.log(results)
        nosex=results[0].pose.nose.x-7
        nosey=results[0].pose.nose.y 

    }
}
function takeSnapshot(){
    save("photo.png")
}
