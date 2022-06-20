import { useEffect, useState } from 'react'
import { Card, Container, Col, Row, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import LoadingComponent from '../loading'


export default function ArticleList() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(process.env.REACT_APP_URL_GET_ALL_POST)
          .then((res) => res.json())
          .then((resData) => {
            const {Data} = resData
            setData(Data)
            setLoading(false)
          })
      }, [])


      const handleDelete = (e) =>{
        setLoading(true)
        fetch(`${process.env.REACT_APP_URL_GET_DETAIL_POST}/${e.target.id}`, {method:'DELETE'})
        .then(()=>{
            setLoading(false)
            Swal.fire(
                'Success!',
                'Aricle is Succes to DELETE',
                'success'
              )
        })
        .catch(()=>{
            setLoading(false)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error when deleting post',
              })
        })
      }


    if (isLoading) return (
        <>
            <LoadingComponent/>
        </>
    )
    if(data)
    return (
    <div className='animation-text'>
                    <>
                        <Container className='border-bottom content'>
                            <Col className='my-5'>
                            <Row className='text-center'>
                                <h2>Blog</h2>
                            </Row>
                            </Col>
                            <Col>
                            <Row>
                            {
                            data.map((item)=>{
                                return(
                                                    <Card className='border my-2'>
                                                        <Card.Body className='p-4'>
                                                            <Card.Title as="h3">{item.Title}</Card.Title>
                                                            <Card.Text className='text-secondary'>
                                                            {item.Desc}
                                                            </Card.Text>
                                                            <Card.Text as='h6' className='border-bottom d-inline p-1'>
                                                            {item.Date}
                                                            </Card.Text>
                                                            <Button variant='danger' className='mx-5' id={item.ArticleId} onClick={handleDelete}>Delete</Button>
                                                        </Card.Body>
                                                    </Card>
                                        )
                                    })
                            }
                            </Row>
                            </Col>
                        </Container>
                    </>
        

    </div>
  )
}
