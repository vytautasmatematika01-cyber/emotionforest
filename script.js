// const lib =  require('./script2.js');
import {drawChristmasTrees} from "./script2.js";
import {drawMoon, drawStars, drawCloud} from "./script3.js";


const ids = ['angle','depth','length','shrink','width','random','randomL'];
ids.forEach(id => {
const el = document.getElementById(id);
const out = document.getElementById(id+'V');
const sync = ()=> out.textContent = el.value;
el.addEventListener('input', ()=> { sync(); drawTree(); });
sync();
});
['trunkColor','leafColor'].forEach(id=>document.getElementById(id).addEventListener('input', drawTree));

const btn = document.getElementById('drawBtn');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


canvas.style.marginLeft = "20px";
const width = 500;
const height = 500;
canvas.width = width;
canvas.height = height;
canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;



function val(id){ return document.getElementById(id).value; }
function rand(n){ return (Math.random()*2-1)*n; }
function degToRad(d){ return d * Math.PI / 180; }

function branch(x1, y1, length, angle, depth, lineWidth){
    if(depth <= 0) return;
  
    const x2 = x1 + length * Math.cos(degToRad(angle));
    const y2 = y1 - length * Math.sin(degToRad(angle));
  
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = val('trunkColor');
    ctx.stroke();
  
    if (depth <= 1) {
      drawLeaf(x2, y2, angle);
    }
  
    const turn = Number(val('angle'));
    const random = Number(val('random'));
    const shrink = Number(val('shrink')) / 100;
  
    let leftWidth = Math.random() * 0.25 + 0.6;
    let rightWidth = Math.random() * 0.25 + 0.6;
  
    const offset = Math.random() * 0.35 + 0.55;

const bx = x1 + (x2 - x1) * offset;
const by = y1 + (y2 - y1) * offset;

const leftFromTop = Math.random() > 0.5;

if (leftFromTop) {

  branch(
    x2,
    y2,
    length * shrink,
    angle - turn + rand(random),
    depth - 1,
    lineWidth * leftWidth
  );

  branch(
    bx,
    by,
    length * shrink,
    angle + turn + rand(random),
    depth - 1,
    lineWidth * rightWidth
  );

} else {

  branch(
    bx,
    by,
    length * shrink,
    angle - turn + rand(random),
    depth - 1,
    lineWidth * leftWidth
  );

  branch(
    x2,
    y2,
    length * shrink,
    angle + turn + rand(random),
    depth - 1,
    lineWidth * rightWidth
  );

}
  }

function drawTree(){
let widthRand = Math.random() * (2 - 1.5) + 1.5;

ctx.clearRect(0,0,canvas.width,canvas.height);
const topGrad = ctx.createLinearGradient(0, 0, 0, height *0.35);
topGrad.addColorStop(0, "#000090");
topGrad.addColorStop(1, "red");

ctx.fillStyle = topGrad;
ctx.fillRect(0, 0, width, height *0.35);

const bottomGrad = ctx.createLinearGradient(0, height * 0.35, 0, height);
bottomGrad.addColorStop(0, "#006000");
bottomGrad.addColorStop(1, "#00ff00");

ctx.fillStyle = bottomGrad;
ctx.fillRect(0, height *0.35, width, height);

drawStars(ctx, width, height, 50);
drawMoon(ctx, width * 0.3, height * 0.2, 50);
drawCloud(ctx, width * 0.35, height * 0.2, 1);
drawCloud(ctx, width * 0.2, height * 0.15, 1.2);
drawCloud(ctx, width * 0.4, height * 0.286, 0.4);
drawCloud(ctx, width * 0.45, height * 0.282, 0.4);
drawCloud(ctx, width * 0.6, height * 0.285, 0.4);
drawCloud(ctx, width * 0.75, height * 0.15, 1.5);

drawChristmasTrees(ctx, width, height, 70);
branch(canvas.width/2, canvas.height-10, Number(val('length')), 90, Number(val('depth')), Number(val('width')));
}

function drawLeaf(x, y, angle){
    ctx.save();
  
    ctx.translate(x, y);
    ctx.rotate(degToRad(angle));
  
    ctx.fillStyle = val('leafColor');
  
    ctx.beginPath();
    ctx.ellipse(0, 0, Number(val('randomL')), 10, 15, 8, Math.PI * 2.5);
    ctx.fill();
  
    ctx.restore();
  }

btn.addEventListener("click", () => {drawTree()});

  drawTree();
  // drawChristmasTrees(ctx, width, height, 10);