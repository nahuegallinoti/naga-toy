import React, { useRef } from "react";
import * as THREE from "three";
import { useFBX, useTexture, OrbitControls, Environment, Sparkles } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { useFrame } from "@react-three/fiber";

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
  colorMapPath = "/tex/Skin_04_basecolor.jpg", // Textura por defecto
  normalMapPath = "/tex/Skin_04_normal.jpg", // Textura por defecto
  roughnessMapPath,
  metalness = 0.7,
  roughness = 0.8,
  autoRotate = false,
  autoRotateSpeed = 2,
  sparklesEnabled = true,
  environmentPreset = "city",
}) => {
  // Referencia para animar el modelo
  const modelRef = useRef<THREE.Group>(null);

  // Cargar el modelo FBX
  const fbx = useFBX(fbxName);

  // Cargar texturas
  const textures = {
    colorMap: useTexture(colorMapPath), // Textura de color
    normalMap: useTexture(normalMapPath), // Textura normal
    roughnessMap: roughnessMapPath ? useTexture(roughnessMapPath) : undefined, // Textura de rugosidad
  };

  // Aplicar materiales a las mallas
  fbx.traverse((child: any) => {
    if (child.isMesh) {
      child.material = new MeshStandardMaterial({
        color: color, // Usar el color parametrizado
        map: textures.colorMap, // Textura principal
        normalMap: textures.normalMap, // Textura para detalles de relieve
        roughnessMap: textures.roughnessMap, // Textura para rugosidad (opcional)
        metalness: metalness, // Configuración PBR para metal
        roughness: roughness, // Configuración PBR para rugosidad
      });
    }
  });

  // Animar el modelo
  useFrame(({ clock }) => {
    if (modelRef.current) {

      // Rotación continua del modelo según la velocidad configurada
      if (autoRotate)
        modelRef.current.rotation.y += autoRotateSpeed * 0.001;

  }
  });

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
