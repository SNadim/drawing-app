const cvs = document.querySelector("canvas");
const colors = Array.from(document.getElementsByClassName('color'));
let clear = false;

colors.map( color =>{
    color.addEventListener("click",e => {
        switch(e.target.innerText) {
            case 'red':
                ctx.strokeStyle = 'red';
                break;
            case 'green':
                ctx.strokeStyle = 'green';
                break;
            case 'black':
                ctx.strokeStyle = 'black';
                break;
            case 'pink':
                 ctx.strokeStyle = 'pink';
                break;
            case 'Erase':
                ctx.strokeStyle = 'white';
                break;
            case 'Clear':
                ctx.clearRect(0,0,oldX,oldY);
                clear = true;
                break;

        }
    });

});

const ctx = cvs.getContext("2d");

// ctx.fillStyle = "green";
// ctx.fillRect(10,10,50,50);
// ctx.strokeStyle = "#f00";
// ctx.strokeRect(5,5,40,40);
// ctx.beginPath();
// ctx.moveTo(10,12);
// ctx.lineTo(30,25);
// ctx.stroke();

let drawing = false;

let oldX = 0;
let oldY = 0;

cvs.addEventListener("mousedown",e=>{
    clear = false
    drawing = true;
    oldX = e.offsetX;
    oldY = e.offsetY;
});

cvs.addEventListener("mouseup",e=>{
    drawing = false;
});

cvs.addEventListener("mousemove",e=>{
    if(!drawing) return false;
    ctx.beginPath();
    ctx.moveTo(oldX,oldY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    oldX = e.offsetX;
    oldY = e.offsetY;

});