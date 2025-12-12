// Pixi.js WebGL sakura petals overlay
// Renders a lightweight particle system behind the content without intercepting pointer events.
(function() {
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  if (!window.PIXI) return; // fail safe if CDN not loaded

  const app = new PIXI.Application({
    resizeTo: window,
    backgroundAlpha: 0,
    antialias: true,
  });

  // Insert canvas as first element in body to keep it under content layers
  document.body.insertBefore(app.view, document.body.firstChild);
  const canvas = app.view;
  canvas.style.position = 'fixed';
  canvas.style.inset = '0';
  canvas.style.zIndex = '0';
  canvas.style.pointerEvents = 'none';

  const stage = app.stage;
  stage.sortableChildren = true;

  // Create a petal texture via vector drawing to avoid external assets
  function createPetalTexture() {
    const g = new PIXI.Graphics();
    g.beginFill(0xF7A8B8, 0.85);
    // Simple petal shape using bezier curves
    g.moveTo(0, 0);
    g.bezierCurveTo(12, -4, 18, 6, 10, 16);
    g.bezierCurveTo(6, 22, -4, 18, -2, 8);
    g.bezierCurveTo(-1, 3, -1, 1, 0, 0);
    g.endFill();
    g.position.set(20, 20);

    const tex = app.renderer.generateTexture(g, PIXI.SCALE_MODES.LINEAR, 2);
    g.destroy(true);
    return tex;
  }

  const petalTexture = createPetalTexture();

  // Config
  const MAX_PETALS = Math.min(40, Math.floor((window.innerWidth * window.innerHeight) / 35000));
  const WIND_BASE = 0.9; // px/frame
  const GRAVITY = 0.35; // px/frame
  const SWAY = 0.6; // rotation sway
  const ALPHA_MIN = 0.10;
  const ALPHA_MAX = 0.24;

  const petals = [];

  function spawnPetal() {
    const sprite = new PIXI.Sprite(petalTexture);
    const scale = 0.5 + Math.random() * 1.1; // 0.5 - 1.6
    sprite.scale.set(scale);
    sprite.anchor.set(0.5);
    sprite.alpha = ALPHA_MIN + Math.random() * (ALPHA_MAX - ALPHA_MIN);

    // Start above the viewport with random x
    sprite.x = Math.random() * window.innerWidth;
    sprite.y = -30 - Math.random() * 200;

    // Velocity
    const vx = WIND_BASE + Math.random() * 1.1; // wind to the right
    const vy = 1.2 + Math.random() * 1.6; // falling speed

    // Rotation dynamics
    const rotSpeed = (Math.random() - 0.5) * 0.03; // bit faster rotation
    const swayPhase = Math.random() * Math.PI * 2;

    // Depth layer (for subtle parallax via alpha/scale variations already set)
    sprite.zIndex = Math.random() < 0.5 ? 0 : 1;

    stage.addChild(sprite);
    petals.push({ sprite, vx, vy, rotSpeed, swayPhase });
  }

  for (let i = 0; i < MAX_PETALS; i++) spawnPetal();

  function recyclePetal(p) {
    p.sprite.x = -20 - Math.random() * 40; // re-enter from left sometimes
    p.sprite.y = -30 - Math.random() * 200;
    p.vx = WIND_BASE + Math.random() * 0.8;
    p.vy = 1.0 + Math.random() * 1.2;
    p.rotSpeed = (Math.random() - 0.5) * 0.02;
    p.swayPhase = Math.random() * Math.PI * 2;
  }

  let windPulse = 0;

  app.ticker.add((delta) => {
    windPulse += 0.003 * delta; // slightly faster global wind oscillation
    const windOsc = Math.sin(windPulse) * 0.5; // -0.5..0.5

    for (const p of petals) {
      const s = p.sprite;
      // Horizontal drift with global oscillation
      s.x += (p.vx + windOsc) * delta;
      // Fall
      p.vy += GRAVITY * 0.01 * delta;
      s.y += p.vy * delta;
      // Rotation + sway
      p.swayPhase += 0.04 * delta;
      s.rotation += p.rotSpeed * delta + Math.sin(p.swayPhase) * SWAY * 0.003 * delta;

      // Recycle when out of view
      if (s.x > window.innerWidth + 60 || s.y > window.innerHeight + 60) {
        recyclePetal(p);
      }
    }
  });

  // Handle resize
  window.addEventListener('resize', () => {
    // Adjust petal count lightly on resize (optional: skip dynamic density for simplicity)
  });

  // Accessibility toggle via prefers-reduced-motion changes at runtime
  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (ev) => {
      if (ev.matches) {
        app.destroy(true);
        if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
      }
    };
    mq.addEventListener('change', handler);
  }
})();
