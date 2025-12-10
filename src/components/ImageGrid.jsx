import { Col, Row,Image } from "react-bootstrap";
import { useContext } from "react";
import { ProfileContext } from "../App";

export default function ImageGrid(){

const images = useContext(ProfileContext).posts.map((post)=>post.image)

const renderImages = ()=>{
    return images.map((imageUrl, index)=>{
        return(
            <Col md={4} key={index} className="mb-4">
            <Image src={imageUrl} fluid/>
            </Col>
        )
    })

}

    return(
        <Row>
            {renderImages()}
        </Row>
    )
}