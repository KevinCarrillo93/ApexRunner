import {
  ContactShadows,
  Environment,
  Lightformer,
  MeshReflectorMaterial,
  PresentationControls,
} from "@react-three/drei";
import Shoes from "./Shoes";

const Experience = () => {
  return (
    <PresentationControls global speed={1.2} polar={[-0.1, Math.PI / 4]}>
      <Shoes position={[0, -2, 0]} scale={0.65} />
      <ContactShadows
        position={[0, -1.05, 0]}
        opacity={0.35}
        scale={10}
        blur={2}
        far={4}
      />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-0.6}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={2}
          roughness={1}
          depthScale={1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#c5aa87"
          metalness={0}
        />
      </mesh>
      <Environment resolution={512}>
        {/* Softbox superior */}
        <Lightformer
          intensity={3}
          position={[0, 5, 0]}
          rotation-x={Math.PI / 2}
          scale={[5, 5, 1]}
        />

        {/* Relleno frontal */}
        <Lightformer intensity={2} position={[0, 2, 5]} scale={[3, 3, 1]} />

        {/* Rim light */}
        <Lightformer
          intensity={1.5}
          position={[-5, 2, 0]}
          rotation-y={Math.PI / 2}
          scale={[4, 2, 1]}
        />
      </Environment>
    </PresentationControls>
  );
};

export default Experience;
