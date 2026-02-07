"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function GridPoints() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { mouse, viewport } = useThree();

  const { count, width, height, separation } = useMemo(() => {
    const w = 40;
    const h = 25;
    const sep = 1.2;
    return {
      width: w,
      height: h,
      separation: sep,
      count: w * h,
    };
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const x = (i % width) - width / 2;
      const y = Math.floor(i / width) - height / 2;

      const posX = x * separation;
      const posY = y * separation;

      // Mouse influence
      const mouseX = (mouse.x * viewport.width) / 2;
      const mouseY = (mouse.y * viewport.height) / 2;

      const dist = Math.sqrt(
        Math.pow(posX - mouseX, 2) + Math.pow(posY - mouseY, 2),
      );
      const force = Math.max(0, 10 - dist) / 10;

      // Wave effect
      const wave =
        Math.sin(posX * 0.2 + time) * 0.5 + Math.cos(posY * 0.2 + time) * 0.5;

      dummy.position.set(
        posX + mouseX * force * 0.1,
        posY + mouseY * force * 0.1,
        wave * 2 + force * 5,
      );

      const scale = 0.1 * (1 + force * 2);
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Subtle color variation if needed, but keeping it uniform for editorial look
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <circleGeometry args={[0.5, 32]} />
      <meshBasicMaterial color='#FF4400' transparent opacity={0.6} />
    </instancedMesh>
  );
}

export function HeroBackground() {
  return (
    <div className='absolute inset-0 -z-10 bg-off-white'>
      <Canvas
        camera={{ position: [0, 0, 30], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <GridPoints />
      </Canvas>
      {/* Editorial Noise Grain Overlay */}
      <div
        className='absolute inset-0 pointer-events-none opacity-[0.03]'
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
        }}
      />
    </div>
  );
}
