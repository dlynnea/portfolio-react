import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {

    return(
        <>
        <Footer className="mt-5">
            <Container fluid={true}>
                <Row>
                    <Col className="p-0" md={3} sm={12}>Danielle Matton</Col>
                </Row>
            </Container>
        </Footer>
        </>
    )
}

export default Footer;