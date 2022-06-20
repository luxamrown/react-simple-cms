import { useState } from "react"
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import Swal from "sweetalert2"
import {
    Navigate,
    useNavigate
  } from "react-router-dom";

export default function Login() {
    const [userName, setUsername]= useState([])
    const [password, setPassword]= useState([])
    const navigate = useNavigate()

    const handleChangeUserName= (e) =>{
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    const handleLogin = (e) =>{
        e.preventDefault()
        if (userName === process.env.REACT_APP_USERNAME && password === process.env.REACT_APP_PASSWORD){
            window.sessionStorage.setItem("isValid","true")
            navigate("/panel", {replace:true})
            return
        }
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Username or password wrong',
          })
    }


  return (
    <>
        <div className="loginform">
            <Container>
                <Row>
                    <Col xs={6} md={4} className="m-auto">
                        <Form className="bg-dark text-light p-4 rounded">
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control name="username" type="text" placeholder="Enter username" onChange={handleChangeUserName} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" onChange={handleChangePassword} />
                            </Form.Group>
                            <Button variant="primary" onClick={handleLogin}>
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}
