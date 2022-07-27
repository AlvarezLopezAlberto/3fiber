import React from "react";
import { Environment } from "@react-three/drei";


const Lights = () => {
    return (
        <>
            <ambientLight 
                intensity={0.8}
            />
            <Environment 
                preset="city" 
            />
        </>
    )
}

export default Lights
