import React from 'react'
import { Tab, Tabs, Container, Row, Col } from 'react-bootstrap'
import ArticleList from '../articleList'
import PostForm from '../form'

export default function Navigator() {
  return (
    <>
    <Container>
        <Row>
            <Col>
                <Tabs defaultActiveKey="postform" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="postform" title="Post Article">
                    <PostForm />
                </Tab>
                <Tab eventKey="profile" title="Article List">
                    <ArticleList />
                </Tab>
                </Tabs>
            </Col>
        </Row>
    </Container>
    </>
  )
}
