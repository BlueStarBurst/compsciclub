import React, { useRef, useState, useEffect } from "react"

export default function Footer(props) {

    function handleClick(e) {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        // window.location = "/multimedia"
    }

    function redir(e, name = "") {
        document.documentElement.scrollTo({
            top: 1,
            behavior: 'smooth'
        })
        if (name == "") {
            return
        }
        setTimeout(() => {
            window.location = "/multimedia/" + name;
        }, 1000)
        
    }

    return(
        <div className="foot" >
            <p onClick={handleClick} style={{marginBottom: "0"}}>
                back to top
            </p>
            <p onClick={(e) => {redir(e, "changes")}} style={{marginBottom: "0"}}>
                changes
            </p>
            <p onClick={(e) => {redir(e, "sources")}} style={{marginBottom: "0"}}>
                sources
            </p>
        </div>
    )
}
