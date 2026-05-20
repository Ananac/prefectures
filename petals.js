// Pixi.js WebGL seasonal particle overlay
// Renders a lightweight particle system behind the content without intercepting pointer events.
// Season is auto-detected from current month; override via ?season=spring|summer|autumn|winter|fireworks
(function() {
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion && reducedMotion.matches) return;

  // --- Season detection ---
  function getSeason() {
    const override = new URLSearchParams(window.location.search).get('season');
    if (override) return override;
    const now = new Date();
    const m = now.getMonth(); // 0=Jan
    const d = now.getDate();
    // Fireworks: July 15 – Sep 15 (sub-range of summer)
    if ((m === 6 && d >= 15) || m === 7 || (m === 8 && d <= 15)) return 'fireworks';
    if (m >= 2 && m <= 3) return 'spring';  // Mar–Apr
    if (m >= 4 && m <= 8) return 'summer';  // May–Sep
    if (m >= 9 && m <= 10) return 'autumn'; // Oct–Nov
    return 'winter';                         // Dec–Feb
  }

  const season = getSeason();

  // Fireworks uses pure Canvas 2D — no Pixi needed, handled below before the PIXI check.

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
  // FIREWORKS (Jul 15 – Sep 15) — Canvas 2D, no Pixi scaling
  // =========================================================
  if (season === 'fireworks') {
    app.destroy(true); // don't need Pixi for this

    const fw2d = document.createElement('canvas');
    fw2d.style.position = 'fixed';
    fw2d.style.top = '0';
    fw2d.style.left = '0';
    fw2d.style.zIndex = '0';
    fw2d.style.pointerEvents = 'none';
    document.body.insertBefore(fw2d, document.body.firstChild);

    function resizeCanvas() {
      fw2d.width  = window.innerWidth;
      fw2d.height = window.innerHeight;
      fw2d.style.width  = window.innerWidth  + 'px';
      fw2d.style.height = window.innerHeight + 'px';
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const ctx = fw2d.getContext('2d');

    const FW_COLORS = [
      '#FF3333', '#FF7700', '#FFDD00', '#44DDFF',
      '#FF44BB', '#88FF44', '#FF88FF', '#FFFFAA',
      '#FF4455', '#FFAA00',
    ];

    const fireworks = [];
    let nextLaunch = performance.now() + 800;

    function launchFirework() {
      const color = FW_COLORS[Math.floor(Math.random() * FW_COLORS.length)];
      const x = Math.random() < 0.5
        ? window.innerWidth * (0.02 + Math.random() * 0.18)
        : window.innerWidth * (0.80 + Math.random() * 0.18);
      const targetY = window.innerHeight * (0.04 + Math.random() * 0.44);
      const vy = (5 + Math.random() * 4) * 0.8;

      fireworks.push({
        x, y: window.innerHeight + 10,
        targetY, color, vy,
        trail: [],
        sparks: null,
      });
    }

    function explode(fw) {
      const n = 80 + Math.floor(Math.random() * 40);
      const hasRing = Math.random() < 0.70;
      const ringColor = FW_COLORS[Math.floor(Math.random() * FW_COLORS.length)];
      fw.sparks = [];
      for (let i = 0; i < n; i++) {
        const isRing = hasRing && i % 3 === 0;
        const angle = (Math.PI * 2 * i) / n + (Math.random() - 0.5) * 0.25;
        const speed = isRing
          ? (1.2 + Math.random() * 1.8) * 0.8
          : (2.2 + Math.random() * 3.8) * 0.8;
        fw.sparks.push({
          x: fw.x, y: fw.targetY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: isRing ? ringColor : fw.color,
          alpha: 1.0,
          decay: (0.009 + Math.random() * 0.007) * 0.8,
          r: 1.8 + Math.random() * 2.2,
        });
      }
      fw.trail = [];
    }

    function drawGlowCircle(x, y, r, color, alpha) {
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 2.5);
      grad.addColorStop(0,   hexAlpha(color, alpha));
      grad.addColorStop(0.4, hexAlpha(color, alpha * 0.55));
      grad.addColorStop(1,   hexAlpha(color, 0));
      ctx.beginPath();
      ctx.arc(x, y, r * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }

    function hexAlpha(hex, a) {
      const r = parseInt(hex.slice(1,3),16);
      const g = parseInt(hex.slice(3,5),16);
      const b = parseInt(hex.slice(5,7),16);
      return `rgba(${r},${g},${b},${a.toFixed(3)})`;
    }

    let last = performance.now();

    function frame(now) {
      const dt = Math.min((now - last) / 16.67, 3); // delta in ~frames, capped
      last = now;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (now >= nextLaunch) {
        launchFirework();
        nextLaunch = now + 200 + Math.random() * 1800;
      }

      for (let i = fireworks.length - 1; i >= 0; i--) {
        const fw = fireworks[i];

        if (!fw.sparks) {
          // Rising
          fw.y -= fw.vy * dt;
          fw.trail.push({ x: fw.x, y: fw.y });
          if (fw.trail.length > 16) fw.trail.shift();

          // Draw trail
          for (let t = 1; t < fw.trail.length; t++) {
            const a = (t / fw.trail.length) * 0.55;
            ctx.beginPath();
            ctx.strokeStyle = hexAlpha(fw.color, a);
            ctx.lineWidth = 1.5;
            ctx.moveTo(fw.trail[t-1].x, fw.trail[t-1].y);
            ctx.lineTo(fw.trail[t].x,   fw.trail[t].y);
            ctx.stroke();
          }
          // Rocket head
          drawGlowCircle(fw.x, fw.y, 3, fw.color, 0.95);

          if (fw.y <= fw.targetY) explode(fw);

        } else {
          // Exploded sparks
          let alive = 0;
          for (const sp of fw.sparks) {
            if (sp.alpha <= 0) continue;
            alive++;
            sp.vx *= 0.978;
            sp.vy *= 0.978;
            sp.vy += 0.044 * dt;
            sp.x  += sp.vx * dt;
            sp.y  += sp.vy * dt;
            sp.alpha -= sp.decay * dt;
            drawGlowCircle(sp.x, sp.y, sp.r, sp.color, Math.max(0, sp.alpha));
          }
          if (alive === 0) fireworks.splice(i, 1);
        }
      }

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);

    if (reducedMotion) {
      reducedMotion.addEventListener('change', (ev) => {
        if (ev.matches && fw2d.parentNode) fw2d.parentNode.removeChild(fw2d);
      });
    }

    return; // skip standard particle system
  }

  // Pixi required for all non-fireworks seasons
  if (!window.PIXI) return;

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
