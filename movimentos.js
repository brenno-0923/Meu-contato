const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;
    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel , 1800 );

function changeImage(){
    let displayImage = document.getElementById('image1')
    if(displayImage.src.match('imgs/mt.jpeg')){
        displayImage.src = 'imgs/or.jpeg'
    }else{
        displayImage.src= 'imgs/mt.jpeg'
    }
}