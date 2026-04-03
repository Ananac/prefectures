// Pixi.js WebGL seasonal particle overlay
// Renders a lightweight particle system behind the content without intercepting pointer events.
// Season is auto-detected from current month; override via ?season=spring|summer|autumn|winter
(function() {
  // Early return if reduced motion preferred or PIXI not loaded
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if ((reducedMotion && reducedMotion.matches) || !window.PIXI) return;

  // --- Season detection ---
  function getSeason() {
    const override = new URLSearchParams(window.location.search).get('season');
    if (override) return override;
    const m = new Date().getMonth(); // 0=Jan
    if (m >= 2 && m <= 3) return 'spring';  // Mar–Apr
    if (m >= 4 && m <= 8) return 'summer';  // May–Sep
    if (m >= 9 && m <= 10) return 'autumn'; // Oct–Nov
    return 'winter';                         // Dec–Feb
  }

  const season = getSeason();

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

  // =========================================================
  // SPRING — sakura petals
  // =========================================================
  function createPetalTexture(colorHex, alpha) {
    const g = new PIXI.Graphics();
    g.beginFill(colorHex, alpha);
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

  // =========================================================
  // SUMMER — fireflies
  // =========================================================
  function createFireflyTexture() {
    const g = new PIXI.Graphics();
    // Soft outer glow
    g.beginFill(0xCCFF88, 0.10);
    g.drawCircle(14, 14, 14);
    g.endFill();
    // Mid glow
    g.beginFill(0xDDFF99, 0.22);
    g.drawCircle(14, 14, 8);
    g.endFill();
    // Bright core
    g.beginFill(0xEEFFBB, 0.90);
    g.drawCircle(14, 14, 3);
    g.endFill();
    const tex = app.renderer.generateTexture(g, PIXI.SCALE_MODES.LINEAR, 2);
    g.destroy(true);
    return tex;
  }

  // =========================================================
  // AUTUMN — momiji (Japanese maple) leaves
  // =========================================================
  function createMomijiTexture(colorHex, alpha) {
    const g = new PIXI.Graphics();
    g.beginFill(colorHex, alpha);

    // 5-lobe maple leaf, drawn clockwise from the top lobe tip.
    // Canvas is roughly 36×34 units; stem tip at bottom-center.
    //
    // Key vertices:
    //   Top lobe tip        (18,  1)
    //   Deep notch R        (23, 11)  ← sharp V between top & upper-right lobes
    //   Upper-right tip     (32,  7)
    //   Shallow notch R     (27, 17)  ← between upper-right & lower-right lobes
    //   Lower-right tip     (30, 22)
    //   Stem right          (21, 28) → stem bottom (18, 34) → stem left (15, 28)
    //   Lower-left tip      ( 6, 22)
    //   Shallow notch L     ( 9, 17)
    //   Upper-left tip      ( 4,  7)
    //   Deep notch L        (13, 11)  ← sharp V between upper-left & top lobes

    g.moveTo(18, 1);                               // top lobe tip

    // top lobe right side → deep notch R (22, 12)
    g.bezierCurveTo(21,  1, 24,  8, 22, 12);
    // exit deep notch R: CP1 drops BELOW notch to force sharp V, then sweeps to upper-right tip (34, 7)
    g.bezierCurveTo(21, 16, 29,  3, 34,  7);
    // around upper-right lobe → shallow notch R (25, 18)
    g.bezierCurveTo(37, 11, 30, 17, 25, 18);
    // exit shallow notch R: CP1 left-of-notch for indent, then lower-right lobe tip (30, 23)
    g.bezierCurveTo(23, 19, 31, 20, 30, 23);
    // lower-right lobe → stem right
    g.bezierCurveTo(28, 26, 23, 27, 20, 28);
    // stem
    g.lineTo(18, 34);
    g.lineTo(16, 28);
    // stem left → lower-left lobe tip (6, 23)
    g.bezierCurveTo(13, 27,  8, 26,  6, 23);
    // around lower-left lobe → shallow notch L (11, 18)
    g.bezierCurveTo( 5, 20,  7, 17, 11, 18);
    // exit shallow notch L: CP1 right-of-notch for indent, then upper-left tip (2, 7)
    g.bezierCurveTo(13, 19,  1, 11,  2,  7);
    // around upper-left lobe → deep notch L (14, 12)
    g.bezierCurveTo( 1,  3,  9,  4, 14, 12);
    // exit deep notch L: CP1 drops BELOW notch for sharp V, then back to top tip
    g.bezierCurveTo(15, 16, 15,  1, 18,  1);

    g.endFill();
    g.position.set(2, 2); // padding so edges aren't clipped
    const tex = app.renderer.generateTexture(g, PIXI.SCALE_MODES.LINEAR, 2);
    g.destroy(true);
    return tex;
  }

  // =========================================================
  // WINTER — snowflakes (soft glowing circles)
  // =========================================================
  function createSnowTexture() {
    const g = new PIXI.Graphics();
    // Soft outer halo
    g.beginFill(0xDDEEFF, 0.15);
    g.drawCircle(10, 10, 10);
    g.endFill();
    // Mid layer
    g.beginFill(0xEEF6FF, 0.40);
    g.drawCircle(10, 10, 6);
    g.endFill();
    // Bright core
    g.beginFill(0xFFFFFF, 0.90);
    g.drawCircle(10, 10, 3);
    g.endFill();
    const tex = app.renderer.generateTexture(g, PIXI.SCALE_MODES.LINEAR, 2);
    g.destroy(true);
    return tex;
  }

  // =========================================================
  // SEASON CONFIG
  // =========================================================
  let textures, MAX_PARTICLES, GRAVITY, SWAY, ALPHA_MIN, ALPHA_MAX;
  let isSummer = false;

  if (season === 'spring') {
    textures = [
      createPetalTexture(0xF7A8B8, 0.85), // Classic pink
      createPetalTexture(0xFFDEE9, 0.90), // Light pink
      createPetalTexture(0xFFFFFF, 0.75), // White
      createPetalTexture(0xFFC0CB, 0.80), // Medium pink
    ];
    MAX_PARTICLES = Math.min(40, Math.floor((window.innerWidth * window.innerHeight) / 35000));
    GRAVITY   = 0.35;
    SWAY      = 0.6;
    ALPHA_MIN = 0.10;
    ALPHA_MAX = 0.24;
  } else if (season === 'summer') {
    textures    = [createFireflyTexture()];
    MAX_PARTICLES = Math.min(28, Math.floor((window.innerWidth * window.innerHeight) / 55000));
    GRAVITY     = 0;     // no gravity — handled per-particle
    SWAY        = 0;
    ALPHA_MIN   = 0.25;
    ALPHA_MAX   = 0.75;
    isSummer    = true;
  } else if (season === 'autumn') {
    textures = [
      createMomijiTexture(0xCC2200, 0.88), // Deep red
      createMomijiTexture(0xFF4400, 0.85), // Red-orange
      createMomijiTexture(0xFF7700, 0.85), // Orange
      createMomijiTexture(0xFFAA00, 0.82), // Amber
      createMomijiTexture(0xDDCC00, 0.80), // Yellow
    ];
    MAX_PARTICLES = Math.min(35, Math.floor((window.innerWidth * window.innerHeight) / 38000));
    GRAVITY   = 0.45; // slightly heavier than petals
    SWAY      = 1.2;  // more tumbling
    ALPHA_MIN = 0.12;
    ALPHA_MAX = 0.28;
  } else if (season === 'winter') {
    textures    = [createSnowTexture()];
    MAX_PARTICLES = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 16000));
    GRAVITY   = 0.30; // gentle fall
    SWAY      = 0.15; // snow falls nearly straight
    ALPHA_MIN = 0.35;
    ALPHA_MAX = 0.70;
  }

  if (!textures) return; // safety: no-op for unimplemented seasons

  // =========================================================
  // PARTICLE SYSTEM (generic)
  // =========================================================
  const particles = [];
  const SPAWN_FILL_SECONDS = 3.0;
  const spawnRatePerFrame = MAX_PARTICLES / (SPAWN_FILL_SECONDS * 60);
  let spawnAccumulator = 0;

  function assignSpawn(p) {
    p.swayPhase = Math.random() * Math.PI * 2;
    p.vx        = (Math.random() - 0.5) * (isSummer ? 0.4 : season === 'winter' ? 0.3 : 0.9);

    if (isSummer) {
      // Fireflies: always scatter across the visible screen area
      p.sprite.x   = Math.random() * window.innerWidth;
      p.sprite.y   = window.innerHeight * 0.25 + Math.random() * window.innerHeight * 0.75;
      p.vy         = -(0.25 + Math.random() * 0.45); // slow upward
      p.pulsePhase = Math.random() * Math.PI * 2;
      p.sprite.alpha = ALPHA_MIN + Math.random() * (ALPHA_MAX - ALPHA_MIN);
    } else {
      p.sprite.alpha = ALPHA_MIN + Math.random() * (ALPHA_MAX - ALPHA_MIN);
      p.rotSpeed     = (Math.random() - 0.5) * (season === 'autumn' ? 0.07 : season === 'winter' ? 0.005 : 0.03);
      p.vy = season === 'autumn' ? 1.5 + Math.random() * 2.0
           : season === 'winter' ? 0.7 + Math.random() * 1.0
           : 1.3 + Math.random() * 1.6;
      p.sprite.x = Math.random() * window.innerWidth;
      // Always spread across a full screen-height above the viewport so
      // particles trickle in continuously — no initial wave, no pause after recycle.
      p.sprite.y = -30 - Math.random() * window.innerHeight;
    }
  }

  function spawnParticle() {
    const tex    = textures[Math.floor(Math.random() * textures.length)];
    const sprite = new PIXI.Sprite(tex);
    const scale  = isSummer
      ? 0.5 + Math.random() * 0.9  // firefly size variation
      : 0.5 + Math.random() * 1.1;
    sprite.scale.set(scale);
    sprite.anchor.set(0.5);
    sprite.zIndex = Math.random() < 0.5 ? 0 : 1;
    stage.addChild(sprite);
    const p = { sprite, vx: 0, vy: 0, rotSpeed: 0, swayPhase: 0, pulsePhase: 0 };
    assignSpawn(p);
    particles.push(p);
  }

  app.ticker.add((delta) => {
    // Gradually spawn to reach target count
    spawnAccumulator += spawnRatePerFrame * delta;
    while (spawnAccumulator >= 1 && particles.length < MAX_PARTICLES) {
      spawnParticle();
      spawnAccumulator -= 1;
    }

    for (const p of particles) {
      const s = p.sprite;

      if (isSummer) {
        // Firefly: gentle horizontal sway + slow upward drift
        s.x += (p.vx + Math.sin(p.swayPhase) * 0.15) * delta;
        s.y += p.vy * delta;
        p.swayPhase  += 0.025 * delta;
        p.pulsePhase += 0.04 * delta;
        // Alpha pulse: twinkle between min and max
        s.alpha = ALPHA_MIN + (ALPHA_MAX - ALPHA_MIN) * (0.5 + 0.5 * Math.sin(p.pulsePhase));

        // Recycle when drifted off top or sides
        if (s.y < -30 || s.x < -30 || s.x > window.innerWidth + 30) {
          assignSpawn(p);
          s.y = window.innerHeight * 0.25 + Math.random() * window.innerHeight * 0.75;
        }
      } else {
        s.x += (p.vx + Math.sin(p.swayPhase) * 0.06) * delta;
        p.vy += GRAVITY * 0.01 * delta;
        s.y += p.vy * delta;
        p.swayPhase += 0.04 * delta;
        s.rotation  += p.rotSpeed * delta + Math.sin(p.swayPhase) * SWAY * 0.003 * delta;

        if (s.y > window.innerHeight + 80) {
          assignSpawn(p);
        }
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
