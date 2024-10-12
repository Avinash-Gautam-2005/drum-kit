let btns=document.querySelectorAll("button").length;



for(let i=0;i<btns;i++){
    let buttons=document.querySelectorAll(".drum")[i];

    buttons.addEventListener("click",function(){
        switch(this.innerHTML){
            case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
            case "a":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
            case "s":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
            case "d":
           var audio = new Audio('sounds/tom-2.mp3');
           audio.play();
           break;
            case "j":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
            case "k":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
            case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
            default :
            alert("invalid:");
        }
    })
}



document.addEventListener("keypress",function(e){
    if(e.code=="KeyW"){
        
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();

    }
    else if(e.code=="KeyA"){
        var audio = new Audio('sounds/crash.mp3');
            audio.play();
            
    }
    else if(e.code=="KeyS"){
        var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        
    }
    else if(e.code=="KeyD"){
        var audio = new Audio('sounds/tom-2.mp3');
           audio.play();
        
    }
    else if(e.code=="KeyJ"){
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
       
    }
    else if(e.code=="KeyK"){
        var audio = new Audio('sounds/snare.mp3');
            audio.play();
        
    }
    else if(e.code=="KeyL"){
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }


    
})












