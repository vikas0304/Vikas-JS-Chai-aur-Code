const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click' , (e)=>{
    //    if(e.target.id === 'grey'){
    //     body.style.backgroundColor = e.target.id
    //    }
    //     else  if(e.target.id === 'yellow'){
    //     body.style.backgroundColor = e.target.id
    //    }
    //     else  if(e.target.id === 'blue'){
    //     body.style.backgroundColor = e.target.id
    //    }
    //     else{
    //     body.style.backgroundColor = 'white'
    //    }

    switch (e.target.id) {
        case grey:
            body.style.backgroundColor = e.target.id
            break;
        case yellow:
            body.style.backgroundColor = e.target.id
            break;
        case blue:
            body.style.backgroundColor = e.target.id
            break;
    
        default:
            body.style.backgroundColor = e.target.id
            break;
    }
    })
})