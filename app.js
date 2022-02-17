const grid = document.querySelector(".grid");
grid.ontouchend = endTouch;
function endTouch(ev) {
    console.log("hemol");
    console.log(ev.screenX);
    console.log("y"+ev.screenY);
  }
// 
grid.addEventListener('touchstart', function(e) {
    // Iterate through the touch points and log each screenX/Y coordinate.
    // The unit of each coordinate is CSS pixels.
    var i;
    for (i=0; i < e.touches.length; i++) {
      console.log("touchpoint[" + i + "].screenX = " + e.touches[i].screenX);
      console.log("touchpoint[" + i + "].screenY = " + e.touches[i].screenY);
    }
  }, false);
  
  
  
  
// 
let no_row = 25;
let msec = 100; // 1sec = 1000 msec
let numelem = no_row*no_row;
let gri_len_str ="";
let food = 50;
for (let a = 0; a < no_row; a++) {
    gri_len_str += " auto"
}
for (let i = 0; i < numelem; i++) {    
    const card = document.createElement("div");
    card.classList.add("card");
    // card.addEventListener()
    grid.append(card);
    
    // console.log(gri_len_str)
    grid.style.gridTemplateColumns = gri_len_str;
    card.id=i+1;
    
}

let pos = 5;
let dir="down";
let points = 0;
let snakelen = 1 ;
let snake = [0];
bcard(pos);
function gameover(_p){
    snake = [_p];
    console.log("dead");
}
function bcard(a){
    if(snake.includes(a)){
        gameover(a);
    }
    snake[0] = a;
    for (let i = 1; i <= numelem; i++) {
        const thisCard = document.getElementById(i)    ;
        thisCard.innerHTML="";
        thisCard.style.backgroundColor="white";
        }

        const selCard = document.getElementById(snake[0]);
        selCard.style.backgroundColor="red";  
        for( let b = 1;b<snake.length;b++){
            const temp = document.getElementById(snake[b]);
            temp.style.backgroundColor="orange";
            // console.log(b);
            // snake[b]=snake[b-1];
            snake[snake.length-b]=snake[snake.length-b-1];
        }  
    
    if(a==food){
        food = Math.floor(Math.random() * numelem);
        points+=5;
        snake.push(a);
        snakelen++;
    }
    const foodCard =document.getElementById(food);
    document.querySelector("#clock").innerText = points ;
    foodCard.style.backgroundColor="green";
    // foodCard.innerHTML="<img src=\"/images/pineapple.png\" alt=\"\">";
    

}
// let gameon = true;
// while(gameon){
    
// setTimeout(function(){
//     _left(); 
// }, 1000);
   
// }
function currentTime() {
    switch (dir) {
        case "up":
            _up();
            break;
        case "right":
                _right();
            break;
        
        case "left":
            _left();
            break;
        
        case "down":
            _down();
            break;
        default:
            break;
    }
     
    let t = setTimeout(function(){ currentTime() }, msec);
  }
  
currentTime();
document.onkeydown = function (event) {
    switch (event.keyCode) {
       case 37:
            _left();
            dir="left";
            break;
            case 65:
           dir="left";
           _left();
           break;
           case 38:
           dir="up";
           _up();
           
           break;
           case 87:
               dir="up";
               _up();
               
               break;  
       case 39:
           dir="right";
           _right();
           
           break;
           case 68:
           dir="right";
           _right();
           
           break;
           case 40:
           dir="down";
           _down();
           
           break;    
           case 83:
           dir="down";
            _down();
            
          break;
    }
 };
function _down(){
    if(pos+no_row<=numelem){
        pos += no_row;
        bcard(pos);    
    }
    else{
        pos-=numelem;
    }
}
function _right(){
    if((pos+1<numelem+1) && !(pos%no_row == 0) ){
        pos += 1;
        bcard(pos);    
    }
    if(pos%no_row == 0){
        pos-=no_row-1;
        bcard(pos);
    }
}
function _left(){
    if((pos-1>0)&&(pos-1)%no_row!=0){
        pos -= 1;
        bcard(pos);    
    }
    if((pos-1)%no_row==0){
        pos+=no_row-1;
        bcard(pos);
    }
}
function _up(){
    if(pos-no_row>0){
        pos -= no_row;
        bcard(pos);    
    }
    else{
        pos += numelem;
    }
}
function up(){
    _up();
    dir="up";   
}
function right(){
    _right();
    dir="right";   
}
function left(){
    _left();
    dir="left";   
}
function down(){
    _down();
    dir="down";   
}
