import {Container, Col, Row, Placeholder } from 'react-bootstrap'

export default function LoadingComponent() {
  return (
    <div>
        <Container style={{"height":"549px"}} className='border-bottom content animation-text'>
                            <Col className='my-5'>
                            <Row className='text-center'>
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={4} />
                            </Placeholder>
                            </Row>
                            </Col>
                            <Col className='my-5'>
                            <Row>
                                <span className='mx-5'>
                                    <Placeholder as="p" animation="glow" c>
                                        <Placeholder xs={10} />
                                    </Placeholder>
                                </span>
                                <Placeholder as="p" animation="wave">
                                    <Placeholder xs={12} />
                                </Placeholder>
                                
                            </Row>
                            </Col>
                        </Container>
    </div>
  )
}
