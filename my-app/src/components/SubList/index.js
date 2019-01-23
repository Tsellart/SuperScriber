import React from "react";
import { Container, Row, Col } from "../Grid/index";

export function SubList({ children }) {
    return <ul className= "list-group">{children}</ul>;
}

export function SubListItem({
    Service,
    Price,
    Rate
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                    {Service}
                    </Col>
                </Row>
                <Row>
                    <Col size="xs-4 sm-2">
                    {Price}
                    </Col>
                </Row>
                <Row>
                    <Col size="xs-4 sm-2">
                    {Rate}
                    </Col>
                </Row>
            </Container>
        </li>
    )
}