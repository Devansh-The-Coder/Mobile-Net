Webcam.set({
    width : 300,
    height : 300,
    image_format : "png",
    png_quality : 90,
    constraiaints: {
        facingMode : "enviourment"
    }
    })
    camera = document.getElementById("camera")
    Webcam.attach('#camera')
    function Capture(){
        Webcam.snap(function(data_uri){
            document.getElementById("output").innerHTML = '<img id = "captured_image" src = "'+ data_uri+'">'
        })
    }
    console.log("ml5Version : ",ml5.version)
    classifier = ml5.imageClassifier("MobileNet", modelLoaded)
    function modelLoaded() {
        console.log("Model is succesfully loaded!")
    }
    function Tell() {
        img = document.getElementById("captured_image"); classifier.classify(img,gotResult)
    }
    function gotResult(error,results) {
        if (error) {
            console.error(error)
        } else {
            console.log(results); document.getElementById("objectName").innerHTML = results[0].label
        }
    }