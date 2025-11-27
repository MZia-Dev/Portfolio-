document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.theme-toggle');
let pulse = null;

toggle.addEventListener('click', (e) => {
  // ripple pulse
  const x = e.clientX, y = e.clientY;
  if (pulse) pulse.remove();
  pulse = document.createElement('div');
  pulse.style.position = 'fixed';
  pulse.style.left = x - 100 + 'px';
  pulse.style.top = y - 100 + 'px';
  pulse.style.width = '200px';
  pulse.style.height = '200px';
  pulse.style.borderRadius = '50%';
  pulse.style.pointerEvents = 'none';
  pulse.style.background = 'radial-gradient(closest-side, rgba(110,231,255,0.35), transparent 70%)';
  pulse.style.zIndex = 0;
  document.body.appendChild(pulse);
  setTimeout(() => pulse && pulse.remove(), 500);

  // playful theme shift
  const root = document.documentElement;
  const current = getComputedStyle(root).getPropertyValue('--bg').trim();
  if (current === '#0b1021') {
    root.style.setProperty('--bg', '#0f1226');
    root.style.setProperty('--panel', '#171b3e');
    root.style.setProperty('--primary', '#7cf4ff');
    root.style.setProperty('--accent', '#ff78bd');
    root.style.setProperty('--accent2', '#b9a3ff');
  } else {
    root.style.setProperty('--bg', '#0b1021');
    root.style.setProperty('--panel', '#121735');
    root.style.setProperty('--primary', '#6ee7ff');
    root.style.setProperty('--accent', '#ff6fb5');
    root.style.setProperty('--accent2', '#a78bfa');
  }
});