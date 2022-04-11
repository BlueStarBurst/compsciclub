import React, { useRef, useState, useEffect } from "react"
import { useHref } from "react-router-dom";

export default function Header(props) {

    function handleClick(e) {
        // if (props.location == "/") {
        //     document.documentElement.scrollTo({
        //         top: 0,
        //         behavior: 'smooth'
        //     })
        //     return;
        // }
        document.documentElement.scrollTo({
            top: 1,
            behavior: 'smooth'
        })
        setTimeout(() => {
            window.location = "/compsciclub/";
        }, 500)
    }

    function redir(e, name = "") {
        document.documentElement.scrollTo({
            top: 1,
            behavior: 'smooth'
        })
        setTimeout(() => {
            window.location = "/compsciclub/" + name;
        }, 1000)
    }

    const head = useRef(null)

    const [text, setText] = useState('')
    const [isForward, setIsForward] = useState(true);

    const realText = 'Computer Science Club'

    let timer = '';

    useEffect(() => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            
            if (isForward) {
                if (text.length < realText.length) {
                    setText(realText.substring(0, text.length + 1))
                } else {
                    setTimeout(() => {
                        setIsForward(false);
                    }, 5000);

                }
            } else {
                if (text.length > 0) {
                    setText(realText.substring(0, text.length - 1))
                } else {
                    setTimeout(() => {
                        setIsForward(true);
                    }, 1000);
                }
            }

        }, 100);
    },[text, isForward]);

    if (props.static) {
        return (<div ref={head} className="header">
        <div className="div1 fade" onClick={(e) => { redir(e, "pastmeetings") }}>
            <p>past meetings</p>
        </div>
        <div className='mainBack' onClick={handleClick}>
            <h1>{">"}{text}</h1>
            <h1 className='flashing'>_</h1>
        </div>

        <div className="div2 fade" onClick={(e) => { redir(e, "projects") }}>
            <p>projects</p>
        </div>
    </div>)
    }

    const { scrollX, scrollY } = useWindowScrollPositions()

    

    useEffect(() => {
        if (!head.current) {
            return;
        }
        if ((scrollY == 0) && head?.current) {
            head.current.className = "header-main";
        } else {
            head.current.className = "header";
        }
    }, [scrollY, head?.current])


    



    return (<div ref={head} className="header">
        <div className="div1 fade" onClick={(e) => { redir(e, "pastmeetings") }}>
            <p>past meetings</p>
        </div>
        <div className='mainBack' onClick={handleClick}>
            <h1>{">"}{text}</h1>
            <h1 className='flashing'>_</h1>
        </div>

        <div className="div2 fade" onClick={(e) => { redir(e, "projects") }}>
            <p>projects</p>
        </div>
    </div>)
}

const useWindowScrollPositions = () => {

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
