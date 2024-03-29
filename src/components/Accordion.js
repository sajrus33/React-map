import React from "react";
import { Accordion, Button, Card } from 'react-bootstrap';


const AccordionBs = props => {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} style={{ backgroundColor: '#17a2b8' }} variant="button" eventKey="0">
                        Map
            </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body style={{ height: "calc(100vh - 128px)", padding: 0 }}>
                        {props.map}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} style={{ backgroundColor: '#17a2b8' }} variant="button" eventKey="1">
                        Targets table
            </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body style={{ padding: 0 }}>
                        {props.table}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default AccordionBs;
