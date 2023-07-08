import React, {useRef} from 'react'
import Lottie from "lottie-react";
import animationData from "../../assets/village_animation.json"

const StartupScreen = ({setAnimationComplete}) => {
    const villageRef = useRef();
    return (
        <div style={{ background: "#f0f2f0", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <Lottie onComplete={()=> setAnimationComplete(true)} loop={false} lottieRef={villageRef} animationData={animationData} />
        </div>
    )
}

export default StartupScreen
