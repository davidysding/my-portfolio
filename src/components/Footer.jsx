import React, { Component } from 'react'
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"

export default class Footer extends Component {
    render() {
        return (
            <div className="mt-5">
                <Container fluid={true}>
                    <Row className="border-top justify-content-between p-3">
                        <Col className="p-0" md={3} sm={12}>
                            Yusheng Ding
                        </Col>
                        <Col className="p-0 d-flex md:justify-content-between" md={3}>
                            This site was made using ReactJS
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
