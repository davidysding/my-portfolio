import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

class Hero extends Component {

    render() {
        const { title, subTitle, text } = this.props
        return (
            <div>
                <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
                    <Container fluid={true}>
                        <Row className="justify-content-center py5">
                            <Col md={8} sm={12}>
                                {title && <h1 className="display-1 font-weight-bold">{title}</h1>}
                                {subTitle && <h3 className="display-4 font-weight-light">{subTitle}</h3>}
                                {text && <h3 className="lead font-weight-light">{text}</h3>}
                            </Col>
                        </Row>

                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Hero;
