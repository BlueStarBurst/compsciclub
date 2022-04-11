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

const slides = [''];
let timeout = '';

function DropdownCard(props) {


    const { scrollX, scrollY } = useWindowScrollPositions()
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const cardRef = useRef(null)
    const imgRef1 = useRef(null)
    const imgRef2 = useRef(null)
    const imgRef3 = useRef(null)
    const [dist, setDist] = useState(0);
    const [expanded, setExpanded] = useState(false);

    function handleClick(e) {
        props.setCurrent(props.name);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            console.log(cardRef.current.offsetTop);
            if (!expanded) {
                scrollTo({
                    top: cardRef.current.offsetTop - windowDimensions.height / 2 + cardRef.current.clientHeight / 2,
                });
            } else {
                scrollTo({
                    top: cardRef.current.offsetTop - windowDimensions.height / 2,
                });
            }

            props.setTrip(!props.trip);

        }, 1000)

        setExpanded(!expanded);
    }

    useEffect(() => {
        if (props.current !== props.name) {
            setExpanded(false);
        }
    }, [props.current])

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

            if (expanded) {
                cardRef.current.style.opacity = 1;
            } else {
                cardRef.current.style.opacity = ((windowDimensions.height / 1.5 - tempDist) / (windowDimensions.height / 2));
            }

            if (props.src) {
                const ydist = "translateY(" + dist / 9 + "px)"
                imgRef1.current.style.transform = ydist;
                imgRef2.current.style.transform = ydist;
                imgRef3.current.style.transform = ydist;
            }

            setDist(tempDist);
        }
    }, [scrollY, cardRef?.current, expanded, props.trip]);

    return (
        <div ref={cardRef} onClick={handleClick} className="dropdown-card">
            <h3>{props.name}</h3>
            <div className={(expanded) ? "frame-outer-open frame" : "frame-outer-closed frame"}>
                <div className={(expanded) ? "frame-open" : "frame-closed"}>
                    <iframe className="frame" src={props.url + "/embed?start=false&loop=false&delayms=3000"} frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
            </div>
        </div>)
}

export default function PastMeetings(props) {

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

            <DropdownCard name="4/7/22" url="https://docs.google.com/presentation/d/1UGVGqaqjV6cmOpvx3PDq7pMqSaYLsFDM7X20DEcCGr0" trip={trip} setTrip={setTrip} current={current} setCurrent={setCurrent} />
            <DropdownCard name="3/24/22" url="https://docs.google.com/presentation/d/1h027w4lavaeIgn-D24tbPqZBelGe4blAgMsLHbXjk7k" trip={trip} setTrip={setTrip} current={current} setCurrent={setCurrent} />
            <DropdownCard name="3/10/22" url="https://docs.google.com/presentation/d/1yVNBbhRw_v_yzNdmexhXX-RGoITeqMQDRho92yCfXVI" trip={trip} setTrip={setTrip} current={current} setCurrent={setCurrent} />
            <DropdownCard name="2/17/22" url="https://docs.google.com/presentation/d/1VGX3LTS-0jbAniZ4R5aykg5unmx9GS59BexxYp9w9SU" trip={trip} setTrip={setTrip} current={current} setCurrent={setCurrent} />
            <DropdownCard name="2/10/22" url="https://docs.google.com/presentation/d/1J18HC4UZGlJSwNNPjLPEq0lPA-kswWqZtq_zt8npU_4" trip={trip} setTrip={setTrip} current={current} setCurrent={setCurrent} />
            <DropdownCard name="1/20/22" url="https://docs.google.com/presentation/d/1yYh9jg0bHzOV4sOkVsLMv7LvtNM7fROtXDk-bz9bEKY" trip={trip} setTrip={setTrip} current={current} setCurrent={setCurrent} />
            <DropdownCard name="1/13/22" url="https://docs.google.com/presentation/d/1H-kT-7DA4RCR6EUmn_ouep-WP0BSniRfw_0_TMoWb7U" trip={trip} setTrip={setTrip} current={current} setCurrent={setCurrent} />
            <DropdownCard name="12/9/21" url="https://docs.google.com/presentation/d/1A3J-FhAS5f0uSLRGS9HBPBWqpbOfypK8B9ShWuZxc8c" trip={trip} setTrip={setTrip} current={current} setCurrent={setCurrent} />
            <DropdownCard name="12/2/21" url="https://docs.google.com/presentation/d/1jGrhI3ZjZJOTf4AZ_zaXQ71B1iw_ascT3LxXtg5IuPY" trip={trip} setTrip={setTrip} current={current} setCurrent={setCurrent} />
            <DropdownCard name="11/18/21" url="https://docs.google.com/presentation/d/1tXTFoRFrTxcHZDIXdSBH8_2RJiVqDGzVKZxnFRdS1lE" trip={trip} setTrip={setTrip} current={current} setCurrent={setCurrent} />
            <DropdownCard name="11/11/21" url="https://docs.google.com/presentation/d/1e78CSHPRoA2uEmqrkRKtbW4No2M_IBYNbH1x4yYxnNQ" trip={trip} setTrip={setTrip} current={current} setCurrent={setCurrent} />
            <DropdownCard name="11/4/21" url="https://docs.google.com/presentation/d/1wBIKasubl0A1uA6YYbxhcrTrvawrKwMln0BzS4Gm2GE" trip={trip} setTrip={setTrip} current={current} setCurrent={setCurrent} />
            <DropdownCard name="10/28/21" url="https://docs.google.com/presentation/d/18e5XZ-1hFy-8dCAJdnu3Ce81-0St_sbAJIljA3ctMEk" trip={trip} setTrip={setTrip} current={current} setCurrent={setCurrent} />
            <DropdownCard name="10/21/21" url="https://docs.google.com/presentation/d/10CDYTRT3VxPxtatGKIs6JbXXVmNoS-U4_fRjrdeML-E" trip={trip} setTrip={setTrip} current={current} setCurrent={setCurrent} />
            <DropdownCard name="10/14/21" url="https://docs.google.com/presentation/d/1nluTYJdYi4QxzkYj2XNHmyIpl3neP_AZANknNCMZbqE" trip={trip} setTrip={setTrip} current={current} setCurrent={setCurrent} />
            <DropdownCard name="10/7/21" url="https://docs.google.com/presentation/d/11afwZOyvT3NjtQF4hHOK8yNpBQ8BCLMUc6_Mh6HECWE" trip={trip} setTrip={setTrip} current={current} setCurrent={setCurrent} />


        </div>
        <Footer />
    </>)
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