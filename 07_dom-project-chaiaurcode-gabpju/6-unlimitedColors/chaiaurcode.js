const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#';
    for(let i =0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }

    return color;
}

// console.log(randomColor());

let interValId;

const startChangeColor = function (){
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }

    interValId = setInterval(changeBgColor , 2000)
}

const stopChangeColor = function (){
    clearInterval(interValId)
}


document.getElementById('start').addEventListener('click', startChangeColor);
document.getElementById('stop').addEventListener('click', stopChangeColor);
