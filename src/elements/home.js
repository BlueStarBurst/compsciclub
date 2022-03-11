import React, { useRef, useState, useEffect } from "react"
import CustomCard from "./card"
// import im1 from "../assets/drawings/1.png"
// import cant from "../assets/img/canterbury.jpg"
// import anglo from "../assets/img/anglo.jpg"
// import anglo2 from "../assets/img/anglo2.png"

// import Header from "./header"
import { OverlayTrigger, Popover, Tooltip } from "react-bootstrap"
import Footer from "./footer"
import Header from "./header"

export default function Home(props) {

    const focImg = useRef(null)
    const focImageSrc = useRef(null)

    function redir(e, name = "") {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        window.location = "/multimedia/" + name;
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



    return (<>
        <Header location="/" />
        {/* <Header /> */}
        <div className="page" onClick={(e) => { handleClick(e, true) }}>
            <div className="focusedImage" ref={focImg}>
                <img id="foc" ref={focImageSrc} ></img>
            </div>

            <CustomCard>
                <h3>what</h3>
                <p>Southlake Carroll's Computer Science Club is a club where anyone share their interest in computer science. There is no experience is required so feel free to dive in to comp sci and join us.</p>
            </CustomCard>
            <CustomCard>
                <h3>when</h3>
                <p>Every Thursday from 3:30 pm to 4:30 pm!</p>
            </CustomCard>
            <CustomCard>
                <h3>where</h3>
                <p>Mr. Stovall's room in the CHS STEAM facility (Room A204). Senior high students are more than welcome to show up whenever you can.</p>
            </CustomCard>
            <CustomCard>
                <h3>why</h3>
                <p>cuz we all know that there's comp sci is something you want to do but are too lazy to do it so you show up here to do it with other people.</p>
            </CustomCard>


        </div>
        <Footer />
    </>)
}