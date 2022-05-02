import React, { useRef, useState, useEffect } from "react"
import CustomCard from "./card"
import im1 from "../assets/imgs/heartback.jpg"
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


    return (<>

        <img src={im1}/>

    </>)
}