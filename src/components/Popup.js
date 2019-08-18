import React from "react";
import { Modal, Form, Button } from 'react-bootstrap';


const Popup = props => {
    const { onSubmit, onCancel, onChange } = props;
    return (
        <div style={{ position: "fixed", zIndex: 3, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,.25)" }}>
            <Modal.Dialog style={{ postion: "absolute" }}>
                <Modal.Header closeButton onClick={onCancel} >
                    <Modal.Title>New location</Modal.Title>
                </Modal.Header>
                <Form style={{ padding: "16px" }}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Location name</Form.Label>
                        <Form.Control type="text" placeholder="name" onChange={onChange} />
                    </Form.Group>
                    <Button onClick={onSubmit} variant="primary" type="submit">
                        Save
                    </Button>
                </Form>
            </Modal.Dialog>
        </div>

    )
}

export default Popup;
