import { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";

export default function CustomCard(props) {

    const { scrollX, scrollY } = useWindowScrollPositions()
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const cardRef = useRef(null)
    const imgRef1 = useRef(null)
    const imgRef2 = useRef(null)
    const imgRef3 = useRef(null)
    const [dist, setDist] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (props.last) {
            return;
        }

        if (cardRef?.current) {

            let tempDist = Math.abs(cardRef.current.offsetTop - (scrollY + (windowDimensions.height / 2 - cardRef.current.clientHeight / 2)))

            cardRef.current.style.opacity = ((windowDimensions.height / 2 - tempDist) / (windowDimensions.height / 2));

            if (props.src) {
                const ydist = "translateY(" + dist / 9 + "px)"
                imgRef1.current.style.transform = ydist;
                imgRef2.current.style.transform = ydist;
                imgRef3.current.style.transform = ydist;
            }

            setDist(tempDist);
        }
    }, [scrollY, cardRef?.current])

    return (
        <div className={((props.wide) ? "wide": "") + " custom-card"} ref={cardRef} style={(props.dir) ? { flexDirection: props.dir, display: "flex", gap: "5px", alignItems: "center", justifyContent: "center", verticalAlign: "middle" } : (props.style || {})}>
            {props.children}
            {(props.src) ? <div className="over">
                <img ref={imgRef1} src={props.src}></img>
                <img ref={imgRef2} src={props.src}></img>
                <img ref={imgRef3} src={props.src}></img>
            </div> : null}

        </div>
    )
}

export const useWindowScrollPositions = () => {

    const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

    useEffect(() => {
        function updatePosition() {
            setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
        }

        window.addEventListener('scroll', updatePosition)
        updatePosition()

        return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    return scrollPosition
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}