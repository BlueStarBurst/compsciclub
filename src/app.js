import React, { useRef, useState, useEffect } from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/styles.css'


// import AddShow from './elements/addShow';
// import { Button, Container, Form, FormControl, FormLabel, Image, InputGroup, Modal, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";
// import Header from "./elements/header";
import Home from "./elements/home";
// import Error from "./elements/error";
// import Sources from "./elements/sources";
// import Changes from "./elements/changes";

// import Details from "./elements/Details";


function App(props) {
    const [currentPage, setCurrentPage] = useState(<Home />)

    console.log(props.path);

    useEffect(() => {
        switch (props.location) {
            case 'home':
                setCurrentPage(<Home />);
                break;
            default:
                setCurrentPage(<Navigate to="/" />)
        }
    }, [props]);

    return (
        <div className='body'>
            {currentPage}
        </div>
    )
}

render((
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App location='home' />} />
                <Route path="/compsciclub" element={<App location='home' />} />
                <Route path="/sources" element={<App location='sources' />} />
                <Route path="/compsciclub/sources" element={<App location='sources' />} />
                <Route path="/changes" element={<App location='changes' />} />
                <Route path="/compsciclub/changes" element={<App location='changes' />} />
                <Route path="*" element={<App location='error' />} />
                {/* <Route path="/details" component={Details} /> */}
            </Routes>
        </BrowserRouter>
    </>
), document.getElementById('root'))
