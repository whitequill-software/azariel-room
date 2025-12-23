"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function AzarielModel() {
  const group = useRef<THREE.Group>(null);
  const [vrm, setVrm] = useState<any>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));

    loader.load(
      "/avatars/Azariel.vrm",
      (gltf) => {
        const vrm = gltf.userData.vrm;
        VRMUtils.removeUnnecessaryVertices(gltf.scene);
        VRMUtils.removeUnnecessaryJoints(gltf.scene);
        setVrm(vrm);
      },
      undefined,
      (err) => console.error("VRM load error:", err)
    );
  }, []);

  useFrame((_, delta) => {
    if (vrm) vrm.update(delta);
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
