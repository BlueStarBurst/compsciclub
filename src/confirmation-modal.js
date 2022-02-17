import React, { useState, useEffect, useRef } from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

/*

Just like a Modal but allows for user confirmation on a certain action. (ie. renaming, moving, or deleting something)

Needs a useState to track 'show' as a boolean.

Needs an 'id' for local storage, an 'onConfirm' function that executes the action (and hides modal), 
and an 'onHide' function that cancels the action (and hides modal)

A Title and description are optional but recommended because the default is "Title" and "Description" :P

You can also pass modal props into the actual modal if there is a specific modal prop you want to use

*/

export default function ConfirmationModal(props) {

    const { show, onHide, onConfirm, id, title, desc, ...rest } = props;

    if (id === null) {
        return null;
    }

    const handleConfirm = () => {
        if (document.getElementById(id).checked == true) {
            var temp = window.localStorage.getItem('neverShowAgainModal') || '{}';
            temp = JSON.parse(temp);
            temp[id] = true;
            window.localStorage.setItem('neverShowAgainModal', JSON.stringify(temp));
        }
        onConfirm();
    };

    useEffect(() => {
        var temp = window.localStorage.getItem('neverShowAgainModal') || '{}';
        temp = JSON.parse(temp);
        if (show && temp[id]) {
            onConfirm();
        }
    }, [show])

    return (<Modal show={show} onHide={onHide} {...rest}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{desc}</Modal.Body>
        <Modal.Footer className="d-flex just">
            <Form.Check type="checkbox" id={id} label="Don't show this again" style={{ marginRight: "auto" }} />
            <Button variant="light" onClick={onHide}>
                Close
            </Button>
            <Button variant="primary" onClick={handleConfirm}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>);
}

ConfirmationModal.defaultProps = { show: false, onHide: console.log, onConfirm: console.log, title: "Title", desc: "Description", id: null }