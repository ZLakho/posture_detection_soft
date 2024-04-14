
let capture;
let posenet;
let noseX , noseY;
let singlePose,skeleton,img_pic, specs, smoke;

function setup(){
    createCanvas(800,500)
    // pic = loadImage('images/zainab.jpeg')
    capture = createCapture(VIDEO)
    capture.hide()

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedPoses);

    img_pic = loadImage("images/face.png")
    specs = loadImage('images/spects.png');
    smoke = loadImage('images/cigar.png');


}

function modelLoaded() {
    console.log('Model Loaded!');
  }


function receivedPoses(poses){
    console.log(poses)
    if (poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
        // noseX = singlepose.pose.nose.x;
        // noseY = singlepose.pose.nose.y;
        // noseX = singlepose.pose.leftEye.x;
        // noseY = singlepose.pose.leftEye.y;
    }

    // console.log(noseX +"  "+noseY)
}
function draw(){
    // background(206)

    ////// basic of P5-------------------------------------------------
    // point(200,200)
    // line(200,200,300,300)
    // triangle(100,200,300,400,150,450)
    // rect(100, 200, 50)
    // circle(100, 200, 30.5)

    // stroke(255, 0, 0)
    // strokeWeight(9)
    // fill(192, 100, 34,100)
    // ellipse(100, 200, 100, 100)
    // stroke(255, 255, 0)
    // ellipse(250, 200, 100, 100)
    // stroke(255, 0, 255)
    // ellipse(400, 200, 100, 100)
    // stroke(0, 255, 0)
    // ellipse(550, 200, 100, 100)
    // stroke(255, 255, 110)
    // ellipse(700, 200, 100, 100)

    // function getRandomArbitrary(min,max){
    //     return Math.random() * (max - min) + min
    // }

    // r = getRandomArbitrary(0,255)
    // g = getRandomArbitrary(0,255)
    // b = getRandomArbitrary(0,255)

    // fill(r,g,b)
    // rect(mouseX, mouseY, 77)

    // image(pic, 100, 100)
    

    // images and videos(webcam)
    image(capture, 0, 0);
    fill(255,0,0);

    if(singlePose){
        for(let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,20);
        }
        stroke(255, 255, 255)
        strokeWeight(5)
        for (let j = 0 ; j < skeleton.length ; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }

        // image(img_pic, singlePose.nose.x-45, singlePose.nose.y-70, 100, 100)

        image(specs,singlePose.nose.x-35,singlePose.nose.y-50,80,80);
        image(smoke,singlePose.nose.x-35,singlePose.nose.y+10,40,40);

    }

}
