'use client'
import localFont from "next/font/local";
import React, {useState, useEffect, useRef} from 'react';
import {select, easeLinear} from 'd3';
import styles from './Game.module.css'; // Assuming CSS module usage

const Game = () => {
    const [position, setPosition] = useState({x: 20, y: 20});
    const [velocity, setVelocity] = useState({x: 0.2, y: 0.2});
    const containerSize = {width: 50, height: 100};
    const circleRadius = 10;
    const animationFrameId = useRef(null);
    const pathRef = useRef(null);
    const fillPathRef = useRef(null);

    useEffect(() => {
        const updatePosition = () => {
            setPosition(prevPosition => {
                let newX = prevPosition.x + velocity.x;
                let newY = prevPosition.y + velocity.y;
                let newVelocityX = velocity.x;
                let newVelocityY = velocity.y;

                if (newX <= 0 || newX + circleRadius * 2 >= containerSize.width) {
                    newVelocityX = -velocity.x;
                }
                if (newY <= 0 || newY + circleRadius * 2 >= containerSize.height) {
                    newVelocityY = -velocity.y;
                }

                setVelocity({
                    x: newVelocityX,
                    y: newVelocityY,
                });

                return {
                    x: newX,
                    y: newY,
                };
            });

            animationFrameId.current = requestAnimationFrame(updatePosition);
        };

        animationFrameId.current = requestAnimationFrame(updatePosition);

        return () => cancelAnimationFrame(animationFrameId.current);
    }, [velocity]);

    useEffect(() => {
        if (pathRef.current && fillPathRef.current) {
            const path = select(pathRef.current);
            const fillPath = select(fillPathRef.current);

            const pathLength = path.node().getTotalLength();
            const fillPathLength = fillPath.node().getTotalLength();

            path
                .attr('stroke-dasharray', `${pathLength} ${pathLength}`)
                .attr('stroke-dashoffset', pathLength)
                .transition()
                .duration(2000)
                .ease(easeLinear)
                .attr('stroke-dashoffset', 0);

            fillPath
                .attr('stroke-dasharray', `${fillPathLength} ${fillPathLength}`)
                .attr('stroke-dashoffset', fillPathLength)
                .transition()
                .duration(2000)
                .ease(easeLinear)
                .attr('stroke-dashoffset', 0);
        }
    }, [position]);

    return (
        <div className={styles.graph__game}>
            <svg style={{width: "100%", height: '100%', position: 'absolute', bottom: -70}}>
                <defs>
                    <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
                        <stop stopColor="#9d7aff" stopOpacity=".33"/>
                        <stop offset=".987" stopColor="#9d7aff" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="grad_stroke" x1="0" x2="1" y1="0" y2="1">
                        <stop stopColor="#9D7AFF"/>
                        <stop offset=".787" stopColor="#622BFC"/>
                        <stop offset="1" stopColor="#5c24fc" stopOpacity="0"/>
                    </linearGradient>
                </defs>
                <g>
                    <path
                        ref={pathRef}
                        d={`M 0 196.39 Q 423.07 196.39 ${position.y + 500} ${position.x - 10}`}
                        fill="transparent"
                        stroke="url(#grad_stroke)"
                    />
                    <path
                        ref={fillPathRef}
                        d={`M 0 196.39 Q 423.07 196.39 ${position.y + 500} ${position.x - 10} L ${position.y + 500} 196.39 Z`}
                        fill="url(#grad)"
                    />
                    {/* Adding the red rectangle at the end */}
                    <rect
                        x={position.y + 500 - 50} // Adjust position to align correctly with the path end
                        y={position.x - 30} // Adjust position to align correctly with the path end
                        width="100"
                        height="100"
                        fill="red"
                        stroke="none"
                    />
                </g>
            </svg>
        </div>
    );
};

export default Game;

{/*<div style={{*/
}
{/*    position: "absolute",*/
}
{/*    width: "110px", opacity: 1,*/
}
{/*    transform: "translate(399.615px, -200.9561px)"*/
}
{/*}}>*/
}
{/*    <div className="sc-iGgWBj ffxCYX">*/
}
{/*        <img src="https://lucky-jet.gamedev-atech.cc/assets/media/314943e8bfa7203475c32ae70f70dd8a.svg" className="sc-gsFSXq bboFTt"/>*/
}
{/*        <img src="https://lucky-jet.gamedev-atech.cc/assets/media/50fe36d637617eef44b0b5786961bf49.webp" className="sc-kAyceB grEoze"/>*/
}
{/*        <img src="https://lucky-jet.gamedev-atech.cc/assets/media/7a702f0aec3a535e1ba54a71c31bdfd1.webp" className="sc-imWYAI dOlAUE"/>*/
}
{/*    </div>*/
}
{/*</div>*/
}