//doc
const buttonC = document.querySelector('.clickButton');
const bg = document.querySelector('.background');

//var
buttonC.addEventListener('mousedown',mouseDown);
bg.addEventListener('mouseup',mouseUp);

let globalCheckMouse = 0;

function mouseDown(){
    globalCheckMouse = 0;
    buttonC.style.opacity = '0.5';

    bg.addEventListener('mousemove',mouseMove);
    
    
}

function mouseUp(e){
    buttonC.style.opacity = '1';
    globalCheckMouse = 1;
}

function mouseMove(e){
    try{
        if(globalCheckMouse == 0){
            buttonC.style.margin  = `${e.y}px 0px 0px ${e.x}px`;
        }
        
    }catch{

    }
}










// let checkMouseEvent = 0;

// function clickedButton(){
//     buttonC.style.opacity = '0.5';
//     if(checkMouseEvent === 0){
//         mouseMove();
//     }else{

//     }
// }

// function mouseMove(e){
//     try{
//         buttonC.style.margin  = `${e.y}px 0px 0px ${e.x}px`;
//     }catch{

//     }
// }
