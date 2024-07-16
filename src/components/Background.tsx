import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

// Stars Component
const Stars: React.FC = props => {
  const ref = useRef<any>();
  const sphere = useMemo(() => random.inSphere(new Float32Array(3000), { radius: 1.2 }), []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta / 10;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.003}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Background Component
const Background: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Background;
