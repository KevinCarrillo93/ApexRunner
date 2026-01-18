import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Configuration from "./components/Configuration";
import * as THREE from "three";
import { CustomizationProvider } from "./contexts/Customization";

function App() {
  return (
    <CustomizationProvider>
      <div className="layout">
        <NavBar />
        <div className="main">
          <div className="viewer">
            <div className="canvasWrapper">
              <Canvas
                className="canvas"
                dpr={[1, 2]}
                gl={{
                  antialias: true,
                  toneMapping: THREE.ACESFilmicToneMapping,
                  toneMappingExposure: 1.1,
                }}
                camera={{ position: [0, 1.2, 4.5], fov: 35 }}
              >
                <color attach="background" args={["#c5aa87"]} />
                <fog attach="fog" args={["#c5aa87", 5, 15]} />
                <Experience />
              </Canvas>
            </div>
          </div>
          <Configuration />
        </div>
      </div>
    </CustomizationProvider>
  );
}
export default App;
