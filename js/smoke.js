import * as THREE from "./three.module.min.js";

let camera, scene, renderer;
let smokeParticles = [];

let isSecondSlideActive = false;
let isFading = false;
let isAppearing = false;
let transitionStartTime = 0;
const transitionDuration = 500; // 0.5 секунды в миллисекундах

init();
animate();

function init() {
  scene = new THREE.Scene();

  const aspect = window.innerWidth / window.innerHeight;
  const frustumSize = 1000;
  camera = new THREE.OrthographicCamera(
    (frustumSize * aspect) / -2,
    (frustumSize * aspect) / 2,
    frustumSize / 2,
    frustumSize / -2,
    1,
    2000
  );
  camera.position.z = 1000;

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  document.getElementById("smoke-container").appendChild(renderer.domElement);

  // Добавляем несколько источников света
  let directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
  directionalLight.position.set(-1, 1, 1);
  scene.add(directionalLight);

  let ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
  scene.add(ambientLight);

  let pointLight = new THREE.PointLight(0xffffff, 1.5);
  pointLight.position.set(0, 0, 500);
  scene.add(pointLight);

  let textureLoader = new THREE.TextureLoader();
  textureLoader.crossOrigin = "Anonymous";
  let smokeTexture = textureLoader.load(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
  );

  let smokeGeo = new THREE.PlaneGeometry(500, 500);

  const borderSize = 0.3; // 20% от края экрана
  const screenWidth = frustumSize * aspect;
  const screenHeight = frustumSize;

  const leftColor = new THREE.Color(0x2028d1); // Синий
  const rightColor = new THREE.Color(0x8a2be2); // Фиолетовый

  function createSmokeParticles() {
    // Очищаем существующие частицы
    smokeParticles.forEach((particle) => scene.remove(particle));
    smokeParticles = [];
    // Настройки для каждой части экрана
    const screenParts = {
      top: { count: 0, color: leftColor },
      bottom: { count: 50, color: leftColor },
      left: { count: 30, color: leftColor },
      right: { count: 80, color: rightColor },
    };

    Object.entries(screenParts).forEach(([part, settings]) => {
      for (let p = 0; p < settings.count; p++) {
        let x, y, z;

        switch (part) {
          case "top":
            x = Math.random() * screenWidth - screenWidth / 2;
            y = screenHeight / 2 - Math.random() * screenHeight * borderSize;
            break;
          case "bottom":
            x = Math.random() * screenWidth - screenWidth / 2;
            y = -screenHeight / 2 + Math.random() * screenHeight * borderSize;
            break;
          case "left":
            x = -screenWidth / 2 + Math.random() * screenWidth * borderSize;
            y = Math.random() * screenHeight - screenHeight / 2;
            break;
          case "right":
            x = screenWidth / 2 - Math.random() * screenWidth * borderSize;
            y = Math.random() * screenHeight - screenHeight / 2;
            break;
        }

        z = Math.random() * 300 - 150;

        let particleColor;
        if (isSecondSlideActive) {
          particleColor =
            part === "left" || part === "top" || part === "bottom"
              ? rightColor
              : leftColor;
        } else {
          // Вычисляем цвет частицы на основе ее положения
          const tx = (x + screenWidth / 2) / screenWidth;
          const ty = (y + screenHeight / 2) / screenHeight;
          const t = (tx + ty) / 2; // Среднее значение для плавного перехода
          particleColor = new THREE.Color().lerpColors(
            leftColor,
            rightColor,
            t
          );
        }

        let smokeMaterial = new THREE.MeshLambertMaterial({
          color: particleColor,
          map: smokeTexture,
          transparent: true,
          opacity: 0.4,
        });

        let particle = new THREE.Mesh(smokeGeo, smokeMaterial);
        particle.position.set(x, y, z);
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
      }
    });
  }

  createSmokeParticles();

  // Устанавливаем начальную прозрачность новых частиц в 0
  smokeParticles.forEach((particle) => {
    particle.material.opacity = 0;
  });

  window.updateSmokeForSlide = function (slideNumber) {
    isFading = true;
    isAppearing = false;
    transitionStartTime = Date.now();

    setTimeout(() => {
      isSecondSlideActive = slideNumber === 2;
      createSmokeParticles();
      isFading = false;
      isAppearing = true;
      transitionStartTime = Date.now();
    }, transitionDuration);
  };

  window.addEventListener("resize", onWindowResize, false);
}

function animate() {
  requestAnimationFrame(animate);

  const elapsedTime = Date.now() - transitionStartTime;
  const transitionProgress = Math.min(elapsedTime / transitionDuration, 1);

  smokeParticles.forEach((particle) => {
    // Продолжаем вращение частиц независимо от состояния анимации
    particle.rotation.z += 0.003;

    if (isFading) {
      particle.material.opacity = 0.4 * (1 - transitionProgress);
    } else if (isAppearing) {
      particle.material.opacity = 0.4 * transitionProgress;
    } else {
      // Движение частиц только в обычном состоянии
      particle.position.x +=
        Math.sin(Date.now() * 0.001 + particle.position.x * 0.01) * 0.1;
      particle.position.y +=
        Math.cos(Date.now() * 0.001 + particle.position.y * 0.01) * 0.1;
    }
  });

  if (isAppearing && transitionProgress === 1) {
    isAppearing = false;
  }

  renderer.render(scene, camera);
}

function onWindowResize() {
  const aspect = window.innerWidth / window.innerHeight;
  const frustumSize = 1000;

  camera.left = (frustumSize * aspect) / -2;
  camera.right = (frustumSize * aspect) / 2;
  camera.top = frustumSize / 2;
  camera.bottom = frustumSize / -2;

  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
