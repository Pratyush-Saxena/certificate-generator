function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    $("#textmodal").show();
    $('#coordinates').val("The point you selected is: (" + x+"," + y+")");
    localStorage.setItem("x",x);
    localStorage.setItem("y",y);
}

let canvasElem = document.querySelector("canvas");

canvasElem.addEventListener("mousedown", function (e) {
    getMousePosition(canvasElem, e);
});

function draw(ev) {
$("#sec1").hide();
$("#sec2").show();
var ctx = document.getElementById('canvas').getContext('2d'),
img = new Image(),
f = document.getElementById("uploadimage").files[0],
url = window.URL || window.webkitURL,
src = url.createObjectURL(f);

img.src = src;
img.onload = function() {
ctx.drawImage(img, 0, 0,900,750);
url.revokeObjectURL(src);
}
}

$("#addpoint").on("click",()=>{
    x = localStorage.getItem("x");
    y = localStorage.getItem("y");
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.font = "30px Arial";
    text = $("#textfield").val();
    ctx.fillText(text,x,y);
    insertrecord(x,y,text);
    $("#textmodal").hide();
    $("#textfield").val("");
});
var config = {}
    i = 0
    function insertrecord(x,y,text){
        temp = {}
         key = $('#keys').find(":selected").text();;
         temp["column"] = key;
         temp["x"] = x;
         temp["y"] =y;
        config[i] = temp;
        i+=1;
        console.log(config);
    }

btn = document.getElementById("generate");
btn.onclick = function (){

window.open(data);
}

document.getElementById("uploadimage").addEventListener("change", draw, false);

