// --- Mėnulis ---
export function drawMoon(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = "#f5f3ce";
    ctx.fill();
  
    // lengvas glow efektas
    ctx.shadowBlur = 30;
    ctx.shadowColor = "#f5f3ce";
    ctx.fill();
  
    ctx.shadowBlur = 0;
  }
  
  // --- Žvaigždės ---
  export function drawStars(ctx, width, height, count) {
    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height *0.3;
      const r = Math.random() * 1.5;
  
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
    }
  }