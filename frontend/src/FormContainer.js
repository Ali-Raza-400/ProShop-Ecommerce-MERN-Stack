import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const FormContainer = ({children}) => {
  return (
    <Container>
        <Row>
            <Col>{children}</Col>
        </Row>
    </Container>
  )
}

export default FormContainer