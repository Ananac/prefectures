// Pixi.js WebGL sakura petals overlay
// Renders a lightweight particle system behind the content without intercepting pointer events.
(function() {
  // Early return if reduced motion preferred or PIXI not loaded
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if ((reducedMotion && reducedMotion.matches) || !window.PIXI) return;

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

  // Create petal textures with variety - pink, white, light pink
  function createPetalTexture(colorHex, alpha) {
    const g = new PIXI.Graphics();
    g.beginFill(colorHex, alpha);
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

  // Create multiple petal textures for variety
  const petalTextures = [
    createPetalTexture(0xF7A8B8, 0.85), // Classic pink
    createPetalTexture(0xFFDEE9, 0.90), // Light pink
    createPetalTexture(0xFFFFFF, 0.75), // White
    createPetalTexture(0xFFC0CB, 0.80), // Medium pink
  ];

  // Config
  const MAX_PETALS = Math.min(40, Math.floor((window.innerWidth * window.innerHeight) / 35000));
  const GRAVITY = 0.35; // px/frame
  const SWAY = 0.6; // rotation sway
  const ALPHA_MIN = 0.10;
  const ALPHA_MAX = 0.24;

  const petals = [];
  // Continuous spawn configuration: fill over a few seconds to avoid batch appearance
  const SPAWN_FILL_SECONDS = 3.0;
  const spawnRatePerFrame = MAX_PETALS / (SPAWN_FILL_SECONDS * 60); // approx per 60fps frame
  let spawnAccumulator = 0;

  function assignSpawn(p) {
    // Top-only spawn, falling almost straight down
    p.sprite.alpha = ALPHA_MIN + Math.random() * (ALPHA_MAX - ALPHA_MIN);
    p.rotSpeed = (Math.random() - 0.5) * 0.03;
    p.swayPhase = Math.random() * Math.PI * 2;
    p.vy = 1.3 + Math.random() * 1.6; // slightly faster falling
    p.sprite.x = Math.random() * window.innerWidth;
    p.sprite.y = -30 - Math.random() * 200;
    p.vx = (Math.random() - 0.5) * 0.9; // stronger horizontal drift
  }

  function spawnPetal() {
    // Randomly select a petal texture for variety
    const randomTexture = petalTextures[Math.floor(Math.random() * petalTextures.length)];
    const sprite = new PIXI.Sprite(randomTexture);
    const scale = 0.5 + Math.random() * 1.1; // 0.5 - 1.6
    sprite.scale.set(scale);
    sprite.anchor.set(0.5);

    // Depth layer (for subtle parallax via alpha/scale variations already set)
    sprite.zIndex = Math.random() < 0.5 ? 0 : 1;

    stage.addChild(sprite);
    const p = { sprite, vx: 0, vy: 0, rotSpeed: 0, swayPhase: 0 };
    assignSpawn(p);
    petals.push(p);
  }

  // Gradual fill will occur in ticker; no immediate mass spawn

  function recyclePetal(p) {
    assignSpawn(p); // respawn at top, drifting right
  }

  // No global wind; petals have only individual gentle drift and sway

  app.ticker.add((delta) => {
        // Gradually spawn petals to reach target count
        spawnAccumulator += spawnRatePerFrame * delta;
        while (spawnAccumulator >= 1 && petals.length < MAX_PETALS) {
          spawnPetal();
          spawnAccumulator -= 1;
        }

    for (const p of petals) {
      const s = p.sprite;
      // Horizontal drift: per-petal baseline + micro sway
      s.x += (p.vx + Math.sin(p.swayPhase) * 0.06) * delta;
      // Fall
      p.vy += GRAVITY * 0.01 * delta;
      s.y += p.vy * delta;
      // Rotation + sway
      p.swayPhase += 0.04 * delta;
      s.rotation += p.rotSpeed * delta + Math.sin(p.swayPhase) * SWAY * 0.003 * delta;

      // Recycle when out of view (bottom)
      if (s.y > window.innerHeight + 80) {
        recyclePetal(p);
      }
    }
  });

  // Accessibility toggle via prefers-reduced-motion changes at runtime
  if (reducedMotion) {
    reducedMotion.addEventListener('change', (ev) => {
      if (ev.matches) {
        app.destroy(true);
        if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
      }
    });
  }
})();
