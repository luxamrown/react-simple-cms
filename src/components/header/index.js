import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Header() {
  return (
    <>
        <Container fluid>
          <Row>
              <div className="py-5 bg-dark">
                <h1 className='text-white text-center'>CMS mohamadelabror.me/blog</h1>
              </div>
          </Row>
        </Container>
    </>
  )
}
