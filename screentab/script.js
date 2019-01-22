
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
let savebtn = document.getElementById('save_btn');

let image = new Image();
image.onload = function () {
    canvas.height = image.height;
    canvas.width = image.width;
    ctx.drawImage(image, 0, 0);
};
image.src = localStorage.getItem('img');

savebtn.onclick = () => {
    let a = document.createElement('a');
    a.download = "image.png";
    a.href = document.getElementById("canvas").toDataURL("image/png");
    a.click();
}

    

