import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFBX, useTexture, OrbitControls, Environment, Sparkles } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

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

  // Cargar las texturas directamente usando useTexture
  const colorMap = useTexture(colorMapPath);
  const normalMap = useTexture(normalMapPath);
  const roughnessMap = useTexture(roughnessMapPath || "");

  // Cargar el modelo FBX
  const fbx = useFBX(fbxName);

  // Aplicar materiales a las mallas después de cargar el FBX
  if (fbx) {
    fbx.traverse((child: any) => {
      if (child.isMesh) {
        child.material = new MeshStandardMaterial({
          color: color, // Usar el color parametrizado
          map: colorMap, // Textura principal
          normalMap: normalMap, // Textura para detalles de relieve
          roughnessMap: roughnessMap, // Textura para rugosidad (opcional)
          metalness: metalness, // Configuración PBR para metal
          roughness: roughness, // Configuración PBR para rugosidad
        });
      }
    });
  }

  // Utilizar useEffect para manejar la rotación automática
  useEffect(() => {
    if (autoRotate && modelRef.current) {
      const interval = setInterval(() => {
        if (modelRef.current) {
          modelRef.current.rotation.y += autoRotateSpeed * 0.001;
        }
      }, 16); // Aproximadamente 60 FPS

      return () => clearInterval(interval);
    }
  }, [autoRotate, autoRotateSpeed]);

  return (
    <group>
      {/* Entorno */}
      <Environment preset={environmentPreset} />

      {/* Luces */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={2} castShadow />

      {/* Efectos especiales */}
      {sparklesEnabled && (
        <Sparkles size={5} scale={[10, 10, 10]} speed={1} count={100} />
      )}

      {/* Modelo con animación */}
      <group ref={modelRef} scale={[0.01, 0.01, 0.01]} position={[0, -1, 0]}>
        <primitive object={fbx} />
      </group>

      {/* Controles de cámara */}
      <OrbitControls autoRotateSpeed={autoRotateSpeed} enableZoom enablePan />
    </group>
  );
};

export default FBXTest;
