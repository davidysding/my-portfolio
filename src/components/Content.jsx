import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default class content extends Component {
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
