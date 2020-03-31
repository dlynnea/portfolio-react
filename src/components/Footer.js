import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {

    return(
        <footer className="mt-auto" id="main-footer">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        <span class="icons">
                            <a href="https://twitter.com/dlynneaa" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
                            <a href="https://www.linkedin.com/in/danielle-matton/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
                            <a href="https://github.com/dlynnea" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                        </span>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" id="copyright"md={3}>&hearts; Created by Danielle Matton</Col>
                </Row> 
            </Container>
        </footer>
    )
}

// className="mt-5"
