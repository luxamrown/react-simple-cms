import React from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'

export default class PostForm extends React.Component {
    state = {
        title:'',
        desc:'',
        author:'',
        notValid:true
    }
    
    handleChange = e =>{
        this.setState({[e.target.name]:e.target.value})
        if (this.state.title !== "" && this.state.desc !== "" && this.state.author === "El-Abror") {
            this.setState({
                notValid:false
            })
        }

        if(this.state.author !== "El-Abror"){
            this.setState({
                notValid:true
            })
        }
    }

    handleSubmit = e =>{
        e.preventDefault()


        const article = {
            "title":this.state.title,
            "desc":this.state.desc,
            "author":this.state.author
        }

        axios.post(process.env.REACT_APP_URL_API, article)
        .then(res=>{
            Swal.fire(
                'Success!',
                'Aricle is Succes to post',
                'success'
              )
        })
        .catch(err=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: err
              })
        })
    }


    render(){
        return (
          <div>
              <Form className='p-5 m-3'>
                <Form.Label as={"h2"} className={"text-center"}>Post an Article</Form.Label>
                  <Form.Group className="mb-3">
                      <Form.Label>Title</Form.Label>
                      <Form.Control name='title' onChange={this.handleChange} placeholder="Title: " />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Content</Form.Label>
                      <Form.Control as="textarea" onChange={this.handleChange} name='desc' rows={15} />
                  </Form.Group>
                  <Form.Select aria-label="Default select example" name='author' onClick={this.handleChange}>
                      <option value="1">Select Author</option>
                      <option value="El-Abror">El-Abror</option>
                  </Form.Select>
                  <Button disabled={this.state.notValid} variant="primary" onClick={this.handleSubmit} className='m-5'>
                      Submit Article
                  </Button>
              </Form>
          </div>
        )
    }
}
