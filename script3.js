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

  export function drawCloud(ctx, x, y, scale = 1) {
    ctx.fillStyle = "rgba(55, 55, 55, 0.7)";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "rgba(155, 155, 155, 0.4)";
  
    // pagrindas (ilgis)
    ctx.beginPath();
    ctx.ellipse(x, y, 35 * scale, 15 * scale, 0, 0, Math.PI * 2);
    ctx.fill();
  
    // papildomi „pūkeliai“
    ctx.beginPath();
    ctx.ellipse(x - 20 * scale, y - 5 * scale, 20 * scale, 12 * scale, 0, 0, Math.PI * 2);
    ctx.fill();
  
    ctx.beginPath();
    ctx.ellipse(x + 20 * scale, y - 5 * scale, 22 * scale, 14 * scale, 0, 0, Math.PI * 2);
    ctx.fill();
  
    ctx.beginPath();
    ctx.ellipse(x, y - 10 * scale, 18 * scale, 12 * scale, 0, 0, Math.PI * 2);
    ctx.fill();
  
    ctx.shadowBlur = 0;
  }