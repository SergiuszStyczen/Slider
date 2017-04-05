var imgCount = 1;
var total = 3;

function slide(x){
    var currentImage = document.getElementById('img');
    imgCount = imgCount + x;
    if(imgCount > total){imgCount = 1}
    if(imgCount < 1){imgCount = total}
    currentImage.src = "img/img" + imgCount + ".jpg";
}

/*window.setInterval(function loadSlide(){
    var currentImage = document.getElementById('img');
    imgCount = imgCount + 1;
    if(imgCount > total){imgCount = 1}
    if(imgCount < 1){imgCount = total}
    currentImage.src = "img/img" + imgCount + ".jpg";
}, 3000);*/
