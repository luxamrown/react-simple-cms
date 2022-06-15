import React from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

export default class PostForm extends React.Component {
    state = {
        title:'',
        desc:'',
        author:''
    }

    handleChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = e =>{
        e.preventDefault()

        const article = {
            "title":this.state.title,
            "desc":this.state.desc,
            "author":this.state.author
        }

        axios.post('hayoo apa linknyaa', article)
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })
    }

    render(){
        return (
          <div className='m-5'>
              <Form className='p-5 m-5'>
                  <Form.Group className="mb-3">
                      <Form.Label>Title</Form.Label>
                      <Form.Control name='title' onChange={this.handleChange} placeholder="Title: " />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Content</Form.Label>
                      <Form.Control as="textarea" onChange={this.handleChange} name='desc' rows={10} />
                  </Form.Group>
                  <Form.Select aria-label="Default select example" name='author'  onChange={this.handleChange}>
                      <option>Select Author</option>
                      <option value="El-Abror">El-Abror</option>
                  </Form.Select>
                  <Button variant="primary" onClick={this.handleSubmit} className='m-5'>
                      Submit Article
                  </Button>
              </Form>
          </div>
        )
    }
}
