(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  // Range chips toggle
  const chips = $$(".chip--selectable");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      chips.forEach((c) => c.setAttribute("aria-pressed", c === chip ? "true" : "false"));
      if (chip.dataset.range) updateChartForRange(chip.dataset.range);
    });
  });

  // Enhanced canvas chart matching Figma design
  const canvas = $("#incomeChart");
  const ctx = canvas.getContext("2d");
  
  function setupCanvas() {
    // Set proper DPI scaling and responsive sizing
    const container = canvas.parentElement;
    const containerRect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    // Responsive canvas sizing
    let canvasWidth = 334;
    let canvasHeight = 314;
    
    if (window.innerWidth >= 1024) {
      canvasWidth = Math.min(containerRect.width, 800);
      canvasHeight = 400;
    } else if (window.innerWidth >= 768) {
      canvasWidth = Math.min(containerRect.width, 600);
      canvasHeight = 350;
    }
    
    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;
    canvas.style.width = canvasWidth + 'px';
    canvas.style.height = canvasHeight + 'px';
    ctx.scale(dpr, dpr);
    
    return { width: canvasWidth, height: canvasHeight };
  }

  // Demo datasets for ranges - more realistic Figma-like data
  const datasets = {
    "1m": [35, 42, 38, 45, 52, 48],
    "3m": [30, 35, 28, 40, 48, 55, 50, 58, 65, 62, 70, 68],
    "1y": [25, 28, 32, 30, 35, 40, 38, 42, 48, 45, 50, 55],
    "custom": [40, 45, 42, 48, 52, 58, 55, 62, 68, 65, 72, 70],
  };

  function drawChart(data) {
    const { width: w, height: h } = setupCanvas();
    ctx.clearRect(0, 0, w, h);

    const padL = 20, padR = 20, padT = 20, padB = 40;
    const innerW = w - padL - padR;
    const innerH = h - padT - padB;

    // Grid lines (subtle)
    ctx.strokeStyle = '#f0f0f0';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = padT + (innerH * i) / 5;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(w - padR, y);
      ctx.stroke();
    }

    // Vertical grid
    for (let i = 0; i <= 11; i++) {
      const x = padL + (innerW * i) / 11;
      ctx.beginPath();
      ctx.moveTo(x, padT);
      ctx.lineTo(x, h - padB);
      ctx.stroke();
    }

    const min = Math.min(...data) * 0.8;
    const max = Math.max(...data) * 1.1;

    // Area fill under the line (purple gradient)
    const gradient = ctx.createLinearGradient(0, padT, 0, h - padB);
    gradient.addColorStop(0, 'rgba(129, 52, 175, 0.3)');
    gradient.addColorStop(1, 'rgba(129, 52, 175, 0.05)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(padL, h - padB);
    
    data.forEach((v, i) => {
      const x = padL + (innerW * i) / (data.length - 1);
      const y = padT + innerH - ((v - min) / (max - min)) * innerH;
      if (i === 0) {
        ctx.lineTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.lineTo(w - padR, h - padB);
    ctx.lineTo(padL, h - padB);
    ctx.closePath();
    ctx.fill();

    // Main line (purple, thicker)
    ctx.strokeStyle = '#8134af';
    ctx.lineWidth = 3;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.beginPath();
    
    data.forEach((v, i) => {
      const x = padL + (innerW * i) / (data.length - 1);
      const y = padT + innerH - ((v - min) / (max - min)) * innerH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Data points (circles)
    ctx.fillStyle = '#8134af';
    data.forEach((v, i) => {
      const x = padL + (innerW * i) / (data.length - 1);
      const y = padT + innerH - ((v - min) / (max - min)) * innerH;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
      
      // White center
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#8134af';
    });

    // Y-axis labels
    ctx.fillStyle = '#999';
    ctx.font = '10px Roboto, sans-serif';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 5; i++) {
      const y = padT + (innerH * i) / 5;
      const value = Math.round(max - ((max - min) * i) / 5);
      ctx.fillText(value + '%', padL - 5, y + 3);
    }

    // X-axis labels (months)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    ctx.textAlign = 'center';
    ctx.fillStyle = '#999';
    for (let i = 0; i < Math.min(data.length, 12); i++) {
      const x = padL + (innerW * i) / (data.length - 1);
      ctx.fillText(months[i] || `M${i+1}`, x, h - padB + 15);
    }
  }

  function updateChartForRange(range) {
    const data = datasets[range] || datasets["3m"];
    drawChart(data);
  }

  // Initial draw
  updateChartForRange("3m");
  
  // Redraw on resize
  window.addEventListener('resize', () => updateChartForRange("3m"));
})();
