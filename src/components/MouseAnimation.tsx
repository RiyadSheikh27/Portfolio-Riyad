import { motion } from "framer-motion"
import { useState, useEffect, useRef } from 'react';

function MouseAnimation() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const ref = useRef<HTMLDivElement>(null);

    const svgPosInfo = ref?.current?.getBoundingClientRect()
    const svgLeft = svgPosInfo?.left ?? 0;
    const svgTop = svgPosInfo?.top ?? 0;
    const svgWidth = svgPosInfo?.width ?? 0;
    const svgHeight = svgPosInfo?.height ?? 0

    const svgCenterX = svgLeft + svgWidth / 2
    const svgCenterY = svgTop + svgHeight / 2

    const deltaX = mouse.x - svgCenterX
    const deltaY = mouse.y - svgCenterY

    const mouseMoveHandler = (e: MouseEvent) => {
        setMouse({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler)
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])
    return (

        <div className="hidden lg:block blur-[90px] opacity-50 absolute bottom-4 right-[33%]" ref={ref}>
            <motion.div
                animate={{
                    translateX: deltaX * 0.1,
                    translateY: deltaY * 0.1
                }}
            >
                <svg
                    viewBox="0 0 900 900"
                    width="500"
                    height="500"
                >
                    <g transform="translate(394.6413462509179 392.0004265586308)">
                        <motion.path
                            d="M236.7 -212C308.3 -165 369.2 -82.5 377.4 8.2C385.7 99 341.3 198 269.7 269.7C198 341.3 99 385.7 -3.5 389.2C-106.1 392.7 -212.1 355.5 -249.6 283.8C-287.1 212.1 -256.1 106.1 -246.8 9.3C-237.5 -87.4 -249.9 -174.9 -212.4 -221.9C-174.9 -268.9 -87.4 -275.4 -2.5 -273C82.5 -270.5 165 -259 236.7 -212"
                            fill="#72E2AE"
                            animate={{
                                d: [
                                    "M208.6 -173.6C282 -135.3 361 -67.6 380.2 19.2C399.4 106.1 358.8 212.1 285.5 278.8C212.1 345.5 106.1 372.7 26.5 346.2C-53 319.7 -106.1 239.4 -164.9 172.7C-223.7 106.1 -288.4 53 -309.7 -21.3C-331 -95.7 -309.1 -191.4 -250.2 -229.7C-191.4 -268.1 -95.7 -249 -14 -235C67.6 -221 135.3 -212 208.6 -173.6",
                                    "M274.5 -249.6C336.8 -212.1 355.4 -106.1 351.7 -3.7C348.1 98.8 322.2 197.5 259.9 250C197.5 302.5 98.8 308.8 19.8 289C-59.2 269.2 -118.3 223.3 -185.5 170.8C-252.7 118.3 -327.8 59.2 -330.7 -2.8C-333.5 -64.8 -264 -129.6 -196.8 -167.1C-129.6 -204.6 -64.8 -214.8 20.6 -235.4C106.1 -256.1 212.1 -287.1 274.5 -249.6",
                                    "M251.8 -219.1C326.8 -176.8 388.4 -88.4 373.2 -15.2C358 58 266 116 191 153.5C116 191 58 208 -13.4 221.4C-84.9 234.9 -169.7 244.7 -226.5 207.2C-283.4 169.7 -312.2 84.9 -298.4 13.8C-284.6 -57.3 -228.2 -114.6 -171.4 -156.9C-114.6 -199.2 -57.3 -226.6 15.6 -242.2C88.4 -257.7 176.8 -261.4 251.8 -219.1",
                                    "M169.8 -163.6C217.4 -122.1 251.7 -61 268.2 16.5C284.7 94 283.4 188.1 235.8 249.4C188.1 310.8 94 339.4 19 320.4C-56.1 301.4 -112.2 234.9 -187.2 173.5C-262.2 112.2 -356.1 56.1 -354.6 1.5C-353 -53 -256.1 -106.1 -181.1 -147.6C-106.1 -189.1 -53 -219 4 -223C61 -227 122.1 -205.1 169.8 -163.6",
                                    "M234.1 -209.1C296.6 -171.6 335.8 -85.8 339.8 4C343.8 93.8 312.6 187.6 250.1 227.5C187.6 267.3 93.8 253.1 -3.2 256.3C-100.2 259.5 -200.3 280 -257.3 240.2C-314.3 200.3 -328.2 100.2 -331.1 -2.9C-334.1 -106.1 -326.1 -212.1 -269.1 -249.6C-212.1 -287.1 -106.1 -256.1 -10.1 -245.9C85.8 -235.8 171.6 -246.6 234.1 -209.1"
                                ],
                                fill: ["#CEFBE3", "#45D3FF", "#45C3AC", "#6C96B1", "#35AA79"]
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                                duration: 5
                            }}
                        >
                        </motion.path>
                    </g>
                </svg>
            </motion.div>
        </div >
    )
}

export default MouseAnimation
