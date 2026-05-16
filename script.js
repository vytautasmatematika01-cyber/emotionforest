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
branch(canvas.width/2, canvas.height-20, Number(val('length')), 90, Number(val('depth')), Number(val('width')));
}

function drawLeaf(x, y, angle){
    ctx.save();
  
    ctx.translate(x, y);
    ctx.rotate(degToRad(angle));
  
    ctx.fillStyle = val('leafColor');
  
    ctx.beginPath();
    ctx.ellipse(0, 0, 8, 14, 0, 10, Math.PI * 2.5);
    ctx.fill();
  
    ctx.restore();
  }

drawTree();