import React, { useRef, useState, useEffect } from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css'

// import AddShow from './elements/addShow';
// import { Button, Container, Form, FormControl, FormLabel, Image, InputGroup, Modal, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'


// import Details from "./elements/Details";

function App(props) {

    const [text, setText] = useState('')
    const [isForward, setIsForward] = useState(true);

    const realText = 'Computer Science Club'

    const main = useRef(null);


    useEffect(() => {
        console.log(main.current.scrollHeight)
        setTimeout(() => {
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
    });

    useEffect(() => {
        console.log(main.current.scrollHeight)
    }, [main?.current?.scrollHeight])

    return (
        <>
            <div className='mainBack' ref={main}>
                <h1>{">"}{text}</h1>
                <h1 className='flashing'>_</h1>
            </div>
            <div className='back'>
                <h3>what</h3>
                <p>Southlake Carroll's Computer Science Club is a club where anyone share their interest in computer science. There is no experience is required so feel free to dive in to comp sci and join us.</p>
            </div>
            <div className='back'>
                <h3>when</h3>
                <p>Every Thursday from 3:30 pm to 4:30 pm!</p>
            </div>
            <div className='back'>
                <h3>where</h3>
                <p>Mr. Stovall's room in the CHS STEAM facility (Room A204). Senior high students are more than welcome to show up whenever you can.</p>
            </div>
            <div className='back'>
                <h3>why</h3>
                <p>cuz we all know that there's comp sci is something you want to do but are too lazy to do it so you show up here to do it with other people.</p>
            </div>
        </>
    )
}

render((
    <App />
), document.getElementById('root'))

