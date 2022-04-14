import React, { useRef, useState, useEffect } from "react"
import CustomCard from "./card"
// import im1 from "../assets/drawings/1.png"
// import cant from "../assets/img/canterbury.jpg"
// import anglo from "../assets/img/anglo.jpg"
// import anglo2 from "../assets/img/anglo2.png"

// import Header from "./header"
import { Dropdown, OverlayTrigger, Popover, Tooltip } from "react-bootstrap"
import Footer from "./footer"
import Header from "./header"

let timeout = '';

function ProjectCard(props) {

    const { scrollX, scrollY } = useWindowScrollPositions()
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const cardRef = useRef(null)
    const imgRef1 = useRef(null)
    const imgRef2 = useRef(null)
    const imgRef3 = useRef(null)
    const [dist, setDist] = useState(0);

    function handleClick(e) {
        scrollTo({
            top: cardRef.current.offsetTop - windowDimensions.height / 2 + cardRef.current.clientHeight / 2,
        });
        if (link) {
            window.open(link, '_blank');
        }
    }

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

            cardRef.current.style.opacity = ((windowDimensions.height / 1.5 - tempDist) / (windowDimensions.height / 2));

            if (props.src) {
                const ydist = "translateY(" + dist / 9 + "px)"
                imgRef1.current.style.transform = ydist;
                imgRef2.current.style.transform = ydist;
                imgRef3.current.style.transform = ydist;
            }

            setDist(tempDist);
        }
    }, [scrollY, cardRef?.current]);

    return (<div onClick={handleClick} className="project-card" ref={cardRef}>
        <div className="project-card-header">
            {(props.title) ? props.title : "Project Title"}
        </div>
        <div className="project-card-body">
            {(props.body) ? props.body : "Sample Project Body"}
        </div>
    </div>)
}

export default function Projects(props) {

    const focImg = useRef(null)
    const focImageSrc = useRef(null)

    function redir(e, name = "") {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        window.location = "/compsciclub/" + name;
    }

    function handleClick(e, fix = false) {
        console.log(fix)
        e.preventDefault();
        e.stopPropagation();
        if (fix && e?.target?.id != "foc") {
            focImg.current.style.display = "none"
            return
        }
        else {
            console.log(e)
            const lol = e.target.src;
            focImageSrc.current.src = lol;
            focImg.current.style.display = "flex"
        }
    }

    const [trip, setTrip] = useState(false);
    const [current, setCurrent] = useState('');

    return (<>
        <Header location="/" static />
        {/* <Header /> */}
        <div className="page-static" onClick={(e) => { handleClick(e, true) }}>
            <div className="projects-container">
                <ProjectCard title="" body="" link="" />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                {/* <ProjectCard /> */}
            </div>
        </div>
        <Footer />
    </>);
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