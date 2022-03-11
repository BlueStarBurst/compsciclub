import React, { useRef } from "react"
import CustomCard from "./card"
import im1 from "../assets/drawings/1.png"
import cant from "../assets/img/canterbury.jpg"
import anglo from "../assets/img/anglo.jpg"
import beo2 from "../assets/img/beo2.jpg"
import beo3 from "../assets/img/beo3.png"

import Header from "./header"
import { OverlayTrigger, Popover, Tooltip } from "react-bootstrap"
import Footer from "./footer"

export default function Home(props) {

    const focImg = useRef(null)
    const focImageSrc = useRef(null)

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

    return (<>
        <Header static />
        <div className="page" onClick={(e) => { handleClick(e, true) }} style={{paddingTop: "10vh"}} >
            <div className="focusedImage" ref={focImg}>
                <img id="foc" ref={focImageSrc} ></img>
            </div>

            <CustomCard src={im1} style={{marginTop: "5vh"}}>
                <h3>A New Language</h3>
                <p>The beloved Modern English one sees today is the culmination of many different aspects of the people inhabiting England, the most influential being the Norman presence in England.</p>
            </CustomCard>

            <CustomCard dir={"row"} wide>
                <img onClick={handleClick} className="cardImg" src={beo2} style={{ width: "48%" }}></img>
                <img onClick={handleClick} className="cardImg" src={beo3} style={{ width: "48%" }}></img>
                <p className="side">Old English compared to Modern English (<i>The British Library and MIT</i>).</p>
            </CustomCard>

            <CustomCard src={im1} wide>
                <h3 >Synonyms</h3>
                <p>
                    Without a doubt, it is because of this French incorporation “English speakers can say that they are going to have a ‘drink’ (Anglo-Saxon origin) or a ‘beverage’ (Old French origin), or that they are going to ‘weep’ (Anglo-Saxon) or ‘cry’ (Old French)” which vastly expanded the new and flourishing language. In addition to these synonyms, entire new words were incorporated as well: “‘government’ is of French origin, as are the words ‘office,’ ‘city,’ ‘police,’ ‘tax,’ ‘jury,’ ‘attorney,’ and ‘prison.’” (Robinson 5)
                </p>
            </CustomCard>

            <CustomCard wide>
                <h3 >Incorporation</h3>
                <p>
                    One prominent author of the time was Geoffrey Chaucer who created a modern King Arthur tale in this evolving language. Using a “deep knowledge of French”' Chaucer incorporated these Anglo-French ideas with the Middle English language, creating King Arthur (Bondar). This new piece of literature created a revolution of works and translations which ultimately restored the English language back to England whilst modernizing the language into the version of the English language that is seen today.
                </p>
            </CustomCard>


        </div>
        <Footer />
    </>)
}