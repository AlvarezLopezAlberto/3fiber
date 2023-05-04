import React from "react";
import { ContactShadows, Environment } from "@react-three/drei";


const Lights = () => {
    return (
        <>
            <ambientLight 
                intensity={0.9}
            />
            <Environment 
                preset="city" 
            />
            <ContactShadows
                ContactShadows="true"
            />
        </>
    )
}

export default Lights
