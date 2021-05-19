var canvas = new fabric.Canvas("My_Canvas");
blockImgWidth = 30
blockImgHeight = 30
blockImgObject = ""


function new_img(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
            blockImgObject = Img;
            blockImgObject.scaleToWidth(blockImgWidth);
            blockImgObject.scaleToHeight(blockImgHeight);

            canvas.add(blockImgObject);
        }

    )
}
window.addEventListener("keydown", my_KeyDown)

function my_KeyDown(e) {
    keyPressed = e.keyCode
    if (e.shiftKey == true && keyPressed == "80") {
        blockImgWidth = blockImgWidth + 10
        blockImgHeight = blockImgHeight + 10
        document.getElementById("cw").innerHTML = blockImgWidth
        document.getElementById("ch").innerHTML = blockImgHeight
    }
    if (e.shiftKey == true && keyPressed == "77") {
        blockImgWidth = blockImgWidth - 10
        blockImgHeight = blockImgHeight - 10
        document.getElementById("cw").innerHTML = blockImgWidth
        document.getElementById("ch").innerHTML = blockImgHeight
    }
}

if (keyPressed == "70") {
    new_img("Face.jpg");
}
if (keyPressed == "76") {
    new_img("Left Hand.jpg")
}
if (keyPressed == "84") {
    new_img("Torso.jpg");
}
if (keyPressed == "82") {
    new_img("Right Hand.jpg");
}
if (keyPressed == "65") {
    new_img("Legs.jpg");
}