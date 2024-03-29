import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/imbera-freezer-room-render.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006.geometry}
          material={materials["lambert1.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_1.geometry}
          material={materials["pared-solkos"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_2.geometry}
          material={materials["suelo-"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_3.geometry}
          material={materials.cajon}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_4.geometry}
          material={materials["marco-puerta"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_5.geometry}
          material={materials["manija-puerta"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_6.geometry}
          material={materials.cristal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_7.geometry}
          material={materials.plastico}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_8.geometry}
          material={materials["metal-blanco"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/imbera-freezer-room-render.gltf");
