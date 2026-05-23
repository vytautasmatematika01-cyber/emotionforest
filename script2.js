// const canv = document.getElementById("canvas");
// const ctx = canv.getContext("2d");
// const width = 300;
// const height = 300;

// canv.style.width = `${width}px`;
// canv.style.height = `${height}px`;
// canv.style.marginLeft = "20px";
// canv.style.marginTop = "20px";
// canv.style.border = "1px solid black";

function drawChristmasTree(ctx, x, y, a, h, d){
if(d < 0) return;
else if(d == 0){
    ctx.beginPath();
    ctx.strokeStyle = "rgb(125, 65, 1)";
    ctx.lineWidth = 5;
    ctx.moveTo(x, y - h);
    ctx.lineTo(x, (y - h) +  h / 2);
    ctx.fillStyle = "rgb(133, 43, 0)";
    ctx.fill();
    ctx.stroke();
}else{
    ctx.beginPath();
    ctx.strokeStyle = "darkgreen";
    ctx.lineWidth = 2;
    ctx.moveTo(x, y);
    ctx.lineTo(x - a, y);
    ctx.lineTo(x, y - h);
    ctx.lineTo(x + a, y);
    ctx.closePath();
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.stroke();
}

    

    drawChristmasTree(ctx, x, y + h * 1.25, a * 1.25, h * 1.25, d - 1);
}
export function drawChristmasTrees(ctx, width, height, n){
    for(let i = 0; i <= n; i++){
        let randW = Math.random() * width;
        let randH = Math.random() * (height * 0.35-height * 0.295) + height * 0.295;
        drawChristmasTree(ctx, randW, randH, 5, 5, 4);
    }
    
}

// drawChristmasTrees(10);
// drawChristmasTree(width/2, height*0.1, 20, 20, 4);