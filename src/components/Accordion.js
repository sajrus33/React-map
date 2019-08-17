import React from "react";
import { Accordion, Button, Card } from 'react-bootstrap';


const AccordionBs = props => {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Map
            </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>{props.map}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Targets table
            </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>{props.table}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default AccordionBs;
