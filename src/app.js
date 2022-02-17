import React, { useRef, useState, useEffect } from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


// import AddShow from './elements/addShow';
// import { Button, Container, Form, FormControl, FormLabel, Image, InputGroup, Modal, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import ConfirmationModal from './confirmation-modal';


// import Details from "./elements/Details";

function App(props) {

    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(true);

    function onSubmit1() {
        console.log(1);
        setShow1(false);
    }

    function onClose1() {
        setShow1(false)
    }

    function onClose2() {
        setShow2(false)
    }

    function onSubmit2() {
        console.log(2);
        setShow2(false);
    }

    return (
        <>
            <ConfirmationModal show={show1} onHide={ onClose1 } id={'example'} onConfirm={ onSubmit1 } />
            <ConfirmationModal show={show2} onHide={ onClose2 } id={'ex2'} onConfirm={ onSubmit2 } />
        </>
    )
}

render((
    <App/>
), document.getElementById('root'))

