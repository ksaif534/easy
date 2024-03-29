import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from 'react'; 
import {createLearningSpace} from '../../actions/learningSpaces';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';

const CreateLearningSpace = () => {

    const initState = { title: '', numberOfMembers: 0, lastUpdate: null, thumbnail: null };
    const [formData,setFormData] = useState(initState);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(createLearningSpace(formData));
    }

    return (
        <Container>
            <Row>
                <Col md={2} lg={2} sm={12} xs={12}></Col>
                <Col md={8} lg={8} sm={12} xs={12}>
                    <Card style={{ width:'100%', marginTop:'20px' }}>
                        <Card.Header style={{ textAlign: 'center', fontSize: '30px', fontFamily:'Raleway' }}><span style={{ fontWeight:'bold' }}>Learning Space Creation Form</span></Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit} style={{ fontFamily:'Raleway', fontSize:'20px' }}>
                                <Form.Group className="mb-3" style={{ marginBottom:'20px' }}>
                                    <Form.Label><span style={{ fontWeight:'bold' }}>Title:</span></Form.Label>
                                    <Form.Control type="text" name="title" onChange={handleChange} placeholder="Enter Title" />
                                </Form.Group>
                                <Form.Group style={{ marginBottom:'20px' }}>
                                    <Form.Label><span style={{ fontWeight:'bold' }}>Number of Members:</span></Form.Label>
                                    <Form.Control type="text" name="numberOfMembers" onChange={handleChange} placeholder="Enter Member separated by a comma" />
                                </Form.Group>
                                <Form.Group style={{ marginBottom:'20px' }}>
                                    <Form.Label><span style={{ fontWeight: 'bold' }}>Last Update:</span></Form.Label>
                                    <Form.Control type="date" name="lastUpdate" onChange={handleChange} placeholder="Enter Last Update"/>
                                </Form.Group>
                                <Form.Group style={{ marginBottom:'20px' }}>
                                    <Form.Label><span style={{ fontWeight:'bold' }}>Thumbnail:</span></Form.Label>
                                    <FileBase type="file" multiple={false} onDone={({base64}) => setFormData({...formData,thumbnail:base64})} />
                                </Form.Group>
                                <Button style={{ width:'100%' }} variant="outline-success" type="submit">Create Learning Space</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2} lg={2} sm={12} xs={12}></Col>
            </Row>
        </Container>
    )
}

export default CreateLearningSpace