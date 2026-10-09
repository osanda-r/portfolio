import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

const VIOLET = 0x30bfe6;
const VIOLET_SOFT = 0xa7eaff;
const CHAMPAGNE = 0xffb87a;

// The camera is far away with a narrow lens so the rings keep their shape
// (little perspective distortion) and always fit inside the square canvas.
const CAMERA_DISTANCE = 16;
const VISIBLE_HALF_HEIGHT = 3.6;
const FOV = (2 * Math.atan(VISIBLE_HALF_HEIGHT / CAMERA_DISTANCE) * 180) / Math.PI;

/**
 * Transparent WebGL scene: a glossy dark orb with a violet rim, a wireframe
 * lattice, three orbit rings with travelling lights, and drifting star dust.
 * It follows the pointer, pauses off-screen, and renders a single still frame
 * when the user prefers reduced motion.
 */
function HeroOrb() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      // No WebGL support: the portrait card still renders on its own.
      return undefined;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);
    camera.position.set(0, 0, CAMERA_DISTANCE);

    // Image-based lighting gives the glossy orb believable reflections.
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTexture;

    scene.add(new THREE.AmbientLight(0x1b1f33, 0.6));
    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(-3, 4, 6);
    const rim = new THREE.DirectionalLight(VIOLET, 3.2);
    rim.position.set(-5, -1, -4);
    const warm = new THREE.PointLight(CHAMPAGNE, 5, 0, 2);
    warm.position.set(3, -3, 3);
    scene.add(key, rim, warm);

    // The orb cluster sits low and to the left so it peeks out from behind the portrait card.
    const orb = new THREE.Group();
    orb.position.set(-2.1, -1.55, 0);
    scene.add(orb);

    const core = new THREE.Mesh(
      new THREE.SphereGeometry(1.15, 96, 96),
      new THREE.MeshPhysicalMaterial({
        color: 0x0b263e,
        metalness: 0.55,
        roughness: 0.28,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        envMapIntensity: 1,
      }),
    );

    // Back-facing shell slightly larger than the core: its edge shows as a violet rim light.
    const rimGlow = new THREE.Mesh(
      new THREE.SphereGeometry(1.22, 96, 96),
      new THREE.MeshBasicMaterial({
        color: VIOLET,
        transparent: true,
        opacity: 0.42,
        side: THREE.BackSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );

    const lattice = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.42, 2),
      new THREE.MeshBasicMaterial({
        color: VIOLET,
        wireframe: true,
        transparent: true,
        opacity: 0.26,
        depthWrite: false,
      }),
    );
    orb.add(core, rimGlow, lattice);

    // Orbit rings, each with a light travelling along it.
    const rings = new THREE.Group();
    scene.add(rings);
    const orbiters = [];
    const ringSpecs = [
      { radius: 2.15, tilt: [1.15, 0.25, 0.2], color: VIOLET_SOFT, opacity: 0.55, speed: 0.22 },
      { radius: 2.5, tilt: [0.4, -0.55, 0.85], color: CHAMPAGNE, opacity: 0.38, speed: -0.16 },
      { radius: 2.8, tilt: [1.45, 0.9, -0.25], color: VIOLET, opacity: 0.24, speed: 0.11 },
    ];
    for (const spec of ringSpecs) {
      const pivot = new THREE.Group();
      pivot.rotation.set(...spec.tilt);
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(spec.radius, 0.008, 10, 280),
        new THREE.MeshBasicMaterial({
          color: spec.color,
          transparent: true,
          opacity: spec.opacity,
          depthWrite: false,
        }),
      );
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 20, 20),
        new THREE.MeshBasicMaterial({ color: spec.color }),
      );
      pivot.add(ring, dot);
      rings.add(pivot);
      orbiters.push({
        dot,
        radius: spec.radius,
        speed: spec.speed,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Star dust in a shell that stays mostly inside the frame.
    const DUST_COUNT = 420;
    const positions = new Float32Array(DUST_COUNT * 3);
    for (let i = 0; i < DUST_COUNT; i++) {
      const r = 2.4 + Math.random() * 1.1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const dust = new THREE.Points(
      dustGeometry,
      new THREE.PointsMaterial({
        color: VIOLET_SOFT,
        size: 0.025,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
      }),
    );
    scene.add(dust);

    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onPointerMove = (event) => {
      pointer.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.targetY = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startedAt = performance.now();
    let last = startedAt;
    let frameId = 0;
    let running = false;
    let inView = true;

    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const draw = (now) => {
      const t = (now - startedAt) / 1000;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      pointer.x += (pointer.targetX - pointer.x) * 0.05;
      pointer.y += (pointer.targetY - pointer.y) * 0.05;

      orb.rotation.y = t * 0.12 + pointer.x * 0.3;
      orb.rotation.x = pointer.y * 0.18;
      lattice.rotation.y += dt * 0.1;
      lattice.rotation.x += dt * 0.04;

      rings.rotation.y = pointer.x * 0.15;
      rings.rotation.x = pointer.y * 0.1;
      for (const o of orbiters) {
        const angle = t * o.speed + o.phase;
        o.dot.position.set(Math.cos(angle) * o.radius, Math.sin(angle) * o.radius, 0);
      }

      dust.rotation.y = t * 0.025;
      dust.rotation.x = t * 0.01;

      renderer.render(scene, camera);
    };

    const tick = (now) => {
      frameId = requestAnimationFrame(tick);
      draw(now);
    };

    const start = () => {
      if (running || reducedMotion || !inView || document.hidden) return;
      running = true;
      last = performance.now();
      frameId = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(frameId);
    };

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();
      else stop();
    });
    io.observe(host);

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const ro = new ResizeObserver(() => {
      resize();
      if (reducedMotion) draw(performance.now());
    });
    ro.observe(host);

    resize();
    if (reducedMotion) draw(performance.now());
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    start();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pointermove", onPointerMove);

      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        for (const material of materials) {
          if (!material) continue;
          if (material.map) material.map.dispose();
          material.dispose();
        }
      });
      envTexture.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className="h-full w-full" />;
}

export default HeroOrb;
