import React from "react";
import { ContactShadows, Environment } from "@react-three/drei";


const Lights = () => {
    return (
        <>
            <ambientLight 
                intensity={0.9}
            />
            <Environment 
                files=".\potsdamer_platz_1k.hdr"
            />
            <ContactShadows
                ContactShadows="true"
            />
        </>
    )
}

export default Lights
