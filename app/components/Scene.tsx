"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const MIN_BLINK_DELAY = 2.5;
const MAX_BLINK_DELAY = 6;
const BLINK_DURATION = 0.18;

function randomBlinkDelay() {
  return (
    MIN_BLINK_DELAY + Math.random() * (MAX_BLINK_DELAY - MIN_BLINK_DELAY)
  );
}

function AzarielModel() {
  const group = useRef<THREE.Group>(null);
  const [vrm, setVrm] = useState<any>(null);
  const nextBlinkAt = useRef(randomBlinkDelay());
  const blinkStartedAt = useRef<number | null>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));

    loader.load(
      "/avatars/Azariel.vrm",
      (gltf) => {
        const loadedVrm = gltf.userData.vrm;
        VRMUtils.removeUnnecessaryVertices(gltf.scene);
        VRMUtils.removeUnnecessaryJoints(gltf.scene);
        setVrm(loadedVrm);
      },
      undefined,
      (err) => console.error("VRM load error:", err)
    );
  }, []);

  useFrame((state, delta) => {
    if (!vrm) return;

    const elapsed = state.clock.getElapsedTime();
    vrm.update(delta);

    // A nearly invisible rise-and-fall keeps the avatar from feeling frozen.
    if (group.current) {
      group.current.position.y = -1.4 + Math.sin(elapsed * 1.25) * 0.008;
      group.current.rotation.z = Math.sin(elapsed * 0.55) * 0.004;
    }

    const expressionManager = vrm.expressionManager;
    if (!expressionManager) return;

    if (blinkStartedAt.current === null && elapsed >= nextBlinkAt.current) {
      blinkStartedAt.current = elapsed;
    }

    if (blinkStartedAt.current !== null) {
      const blinkProgress = (elapsed - blinkStartedAt.current) / BLINK_DURATION;

      if (blinkProgress >= 1) {
        expressionManager.setValue("blink", 0);
        blinkStartedAt.current = null;
        nextBlinkAt.current = elapsed + randomBlinkDelay();
      } else {
        // Close quickly, then reopen. The sine curve gives one smooth blink.
        expressionManager.setValue("blink", Math.sin(blinkProgress * Math.PI));
      }
    }
  });

  if (!vrm) return null;

  return <primitive ref={group} object={vrm.scene} position={[0, -1.4, 0]} />;
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 1.4, 2.2], fov: 35 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[1, 3, 2]} intensity={1} />

      <AzarielModel />

      <OrbitControls enablePan={false} />
    </Canvas>
  );
}
