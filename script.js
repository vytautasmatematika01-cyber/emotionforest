const ids = ['angle','depth','length','shrink','width','random'];
ids.forEach(id => {
const el = document.getElementById(id);
const out = document.getElementById(id+'V');
const sync = ()=> out.textContent = el.value;
el.addEventListener('input', ()=> { sync(); drawTree(); });
sync();
});
['trunkColor','leafColor'].forEach(id=>document.getElementById(id).addEventListener('input', drawTree));

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function val(id){ return document.getElementById(id).value; }
function rand(n){ return (Math.random()*2-1)*n; }
function degToRad(d){ return d * Math.PI / 180; }

function branch(x1, y1, length, angle, depth, lineWidth){
if(depth <= 0) return;

const x2 = x1 + length * Math.cos(degToRad(angle));
const y2 = y1 - length * Math.sin(degToRad(angle));

ctx.beginPath();
ctx.moveTo(x1,y1);
ctx.lineTo(x2,y2);
ctx.lineWidth = lineWidth;
ctx.strokeStyle = depth <= 2 ? val('leafColor') : val('trunkColor');
ctx.stroke();

const turn = Number(val('angle'));
const random = Number(val('random'));
const shrink = Number(val('shrink')) / 100;

branch(x2, y2, length * shrink, angle - turn + rand(random), depth - 1, lineWidth * 0.75);
branch(x2, y2, length * shrink, angle + turn + rand(random), depth - 1, lineWidth * 0.75);
}

function drawTree(){
ctx.clearRect(0,0,canvas.width,canvas.height);
branch(canvas.width/2, canvas.height-20, Number(val('length')), 90, Number(val('depth')), Number(val('width')));
}

drawTree();