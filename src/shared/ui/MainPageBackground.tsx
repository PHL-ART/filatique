"use client";

import Tilt from 'react-parallax-tilt';

export const MainPageBackground = () => {
    return (
        <>
            <Tilt
                className="parallax-effect"
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                perspective={1500}
                transitionSpeed={5000}
                scale={1.10}
                gyroscope={true}
                tiltReverse={true}
                trackOnWindow={true}
                glareEnable={false}
                tiltAngleXInitial={0}
                tiltAngleYInitial={0}
            >
                <div className="main-bg">
                    <Tilt
                        className="parallax-effect-logo"
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        perspective={500}
                        transitionSpeed={3000}
                        scale={1.20}
                        gyroscope={true}
                        tiltReverse={true}
                        trackOnWindow={true}
                        glareEnable={false}
                        tiltAngleXInitial={0}
                        tiltAngleYInitial={0}
                    >
                        <div className="main-logo"></div>
                    </Tilt>
                </div>
            </Tilt>
            {/* <div className="noise-bg"></div> */}
        </>
    )
}
