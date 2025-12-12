import {Modal, Button, Col, Image, Row, Form} from 'react-bootstrap'
import { useContext, useState} from 'react'
import { ProfileContext } from '../App'
import { useDispatch } from 'react-redux'
import {createPost} from '../features/posts/postsSlice'

export default function AddPostModal({show, handleClose}){
const{image,name} = useContext(ProfileContext)
const dispatch = useDispatch()
const [imageUrl, setImageUrl] = useState('')
const [description, setDescription] = useState('')
const [invalidUrl, setInvalidUrl] = useState(false)

const handleImageError = () => {setInvalidUrl(true)}

const handleImageLoad = () => {setInvalidUrl(false)}

const handleSubmit = (e) => {
    e.preventDefault()
    if(imageUrl){
        dispatch(createPost({image:imageUrl, description}))
            setImageUrl('')
            setDescription('')
            handleClose()
    } else{
        setInvalidUrl(true)
    }
}

    return(

        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header>
                <Modal.Title>Create new post</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Row>
                        <Col sm={7}>
                            <Image 
                            src={imageUrl ? imageUrl: 'https://sig1.co/img-placeholder-1'}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            alt='Uploaded content'
                            style={{width:'100%'}}/>                        
                        </Col>
                        <Col sm={5}>
                        <Image
                        alt='Uploader'
                        style={{width:'32px'}}
                        src={image}
                        roundedCircle  />
                        <span>{name}</span>
                        <Form.Control
                        placeholder='Add image url'
                        className='my-3'
                        onChange={(e)=>{setImageUrl(e.target.value)}}
                        value={imageUrl}
                        />
                            {invalidUrl && <div className='text-danger'> 
                                Invalid URL or failed to load image
                                 </div>
                            }

                        <Form.Control
                        placeholder='Write a caption'
                        as='textarea'
                        rows={3}
                        className=''
                        onChange={(e)=>{setDescription(e.target.value)}}
                        value={description}
                        />
                        <Button type='submit' style={{width:'100%'}}>
                            Share
                        </Button>
                        </Col>
                    </Row>

                </Modal.Body>
            </Form>
        </Modal>
    )
}