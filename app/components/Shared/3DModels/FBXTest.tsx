import React, { useRef, useEffect, useCallback, useMemo } from "react";
import * as THREE from "three";
import { useFBX, useTexture, OrbitControls, Environment, Sparkles } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { useThree } from "@react-three/fiber";

// Tipos de los presets de entorno definidos en presetsObj
export declare const presetsObj: {
  apartment: string;
  city: string;
  dawn: string;
  forest: string;
  lobby: string;
  night: string;
  park: string;
  studio: string;
  sunset: string;
  warehouse: string;
};
export type PresetsType = keyof typeof presetsObj; // Los valores de los presets disponibles

// Definir las propiedades que puedes pasar al componente
interface FBXTestProps {
  fbxName: string; // Nombre del archivo FBX
  color?: string; // Color del modelo (por defecto blanco)
  colorMapPath?: string; // Ruta de la textura de color
  normalMapPath?: string; // Ruta de la textura normal
  roughnessMapPath?: string; // Ruta de la textura de rugosidad
  metalness?: number; // Metalness (por defecto 0.7)
  roughness?: number; // Roughness (por defecto 0.8)
  autoRotate?: boolean; // Rotación automática (por defecto desactivada)
  autoRotateSpeed?: number; // Velocidad de rotación automática (por defecto 2)
  sparklesEnabled?: boolean; // Habilitar o no los efectos de "sparkles"
  environmentPreset?: PresetsType; // Tipo de entorno (por defecto "forest")
}

const FBXTest: React.FC<FBXTestProps> = ({
  fbxName,
  color = "#ffffff", // Valor por defecto blanco
  colorMapPath = "/textures/Skin_04_basecolor.jpg", // Textura por defecto
  normalMapPath = "/textures/Skin_04_normal.jpg", // Textura por defecto
  roughnessMapPath,
  metalness = 0.7,
  roughness = 0.8,
  autoRotate = false,
  autoRotateSpeed = 2,
  sparklesEnabled = true,
  environmentPreset = "city",
}) => {
  const modelRef = useRef<THREE.Group>(null);
  const { camera, gl } = useThree();

  // Cargar las texturas directamente usando useTexture
  const colorMap = useTexture(colorMapPath);
  const normalMap = useTexture(normalMapPath);
  const roughnessMap = useTexture(roughnessMapPath || "");

  // Cargar el modelo FBX
  const fbx = useFBX(fbxName);

  // Memorizar el material para evitar cálculos repetitivos
  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color,
        map: colorMap,
        normalMap,
        roughnessMap,
        metalness,
        roughness,
      }),
    [color, colorMap, normalMap, roughnessMap, metalness, roughness]
  );

  // Aplicar materiales a las mallas después de cargar el FBX y asignar eventos de clic
  useEffect(() => {
    if (fbx) {
      fbx.traverse((child: any) => {
        console.log(child.name);
        if ((child as THREE.Mesh).isMesh) {
          child.material = new MeshStandardMaterial({
            color: color,
            map: colorMap,
            normalMap: normalMap,
            roughnessMap: roughnessMap,
            metalness: metalness,
            roughness: roughness,
          });

          const mesh = child as THREE.Mesh;
          mesh.material = material;

          // Agregar manejador de clic solo a la parte específica (palanca)
          if (child.name === "eyes&mouth") {
            child.userData = { isClickable: true }; // Marcamos como clickeable
          }
        }
      });
    }
  }, [fbx, color, colorMap, normalMap, roughnessMap, metalness, roughness, material]);


  // Manejo de clics con Raycaster
  const handleMouseClick = useCallback(
    (event: any) => {
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      raycaster.setFromCamera(mouse, camera);

      if (modelRef.current) {
        const intersects: any = raycaster.intersectObject(modelRef.current, true);
        const clickedObject = intersects.find((intersect: any) => intersect.object.userData.isClickable);

        if (clickedObject) {
          alert("Auch! ¡Eso dolió!");
        }
      }
    },
    [camera]
  );

  useEffect(() => {
    gl.domElement.addEventListener("click", handleMouseClick);
    return () => {
      gl.domElement.removeEventListener("click", handleMouseClick);
    };
  }, [gl, camera, handleMouseClick]);

  return (
    <group>
      <Environment preset={environmentPreset} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      {sparklesEnabled && <Sparkles size={5} scale={[10, 10, 10]} speed={1} count={100} />}
      <group ref={modelRef} scale={[0.01, 0.01, 0.01]} position={[0, -1, 0]}>
        <primitive object={fbx} />
      </group>
      <OrbitControls autoRotate={autoRotate} autoRotateSpeed={autoRotateSpeed} enableZoom enablePan />
    </group>
  );
};

export default FBXTest;
