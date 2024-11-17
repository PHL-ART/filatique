"use client";

import { useRef } from "react";
import { Mesh } from "three";
import { ContactShadows, Environment, Float, Text, Html, Lightformer, MeshTransmissionMaterial } from "@react-three/drei";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";
import { easing } from 'maath';
import { TextProps } from "@mantine/core";



export const MainPageBackground = () => {

    return (
        <div style={{ display: "flex", justifyContent: "center", justifyItems: 'center', alignItems: 'center', height: '100%' }}>

            <Canvas eventPrefix="client" shadows camera={{ position: [0, 0, 20], fov: 50 }}>
                {/* <color attach="background" args={["#e0e0e0"]} /> */}
                {/* <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />
                <Status />
                <Float floatIntensity={2}>
                    <Torus />
                </Float>
                <ContactShadows scale={100} position={[0, -7.5, 0]} blur={1} far={100} opacity={0.85} />
                <Environment preset="city">
                    <Lightformer intensity={8} position={[10, 5, 0]} scale={[10, 50, 1]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
                </Environment>
                <EffectComposer enableNormalPass={false}>
                    <N8AO aoRadius={1} intensity={2} />
                    <Bloom mipmapBlur luminanceThreshold={0.8} intensity={2} levels={8} />
                    <TiltShift2 blur={0.2} />
                </EffectComposer> */}
                {/* <Rig /> */}
            </Canvas>
        </div>
    )
}

const Rig = () => {
    useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [Math.sin(-state.pointer.x) * 5, state.pointer.y * 3.5, 15 + Math.cos(state.pointer.x) * 10],
            0.2,
            delta,
        )
        state.camera.lookAt(0, 0, 0)
    })
    return null;
}


const Torus = (props: MeshProps) => {

    const mesh = useRef<Mesh>(null!);

    return (
        <mesh receiveShadow castShadow {...props} ref={mesh}>
            <torusGeometry args={[4, 1.2, 128, 64]} />
            <MeshTransmissionMaterial backside backsideThickness={5} thickness={2} />
        </mesh>
    )
};

const Status = (props: TextProps) => {
    return (
        <Text fontSize={14} letterSpacing={-0.025} color="black" position={[0, 0, -10]} {...props}>
            Filatique
            <Html style={{ color: "transparent", fontSize: "33.5em" }} transform>
                Filatique
            </Html>
        </Text>
    )
}

