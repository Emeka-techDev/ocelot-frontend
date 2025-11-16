import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export default function SpinningBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // --- Renderer ---------------------------------------
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // --- Scene ------------------------------------------
    const scene = new THREE.Scene();

    // Add soft neutral lighting
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    // --- Camera -----------------------------------------
    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      1,
      100
    );
    camera.position.set(5, 2, 8);

    // --- Controls ----------------------------------------
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.target.set(0, 0.5, 0);
    controls.update();

    // --- Load Model --------------------------------------
    let mixer;
    const loader = new GLTFLoader();

    // Draco compression support
    const draco = new DRACOLoader();
    draco.setDecoderPath("/draco/"); // <-- YOU MUST PUT draco decoder files in /public/draco/
    loader.setDRACOLoader(draco);

    loader.load(
      "/models/LittlestTokyo.glb",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.01, 0.01, 0.01);
        model.position.set(1, 1, 0);
        scene.add(model);

        // If model has animations
        mixer = new THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();

        renderer.setAnimationLoop(animate);
      },
      undefined,
      (err) => console.error(err)
    );

    // --- Resize -------------------------------------------
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // --- Animation Loop -----------------------------------
    const clock = new THREE.Clock();

    function animate() {
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      controls.update();
      renderer.render(scene, camera);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      pmrem.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="z-20"
      style={{ position: "relative" }}
    />
  );
}
