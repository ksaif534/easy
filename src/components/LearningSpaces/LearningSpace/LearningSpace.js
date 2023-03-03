import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup  from 'react-bootstrap/ListGroup';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getLearningSpace} from '../../../actions/learningSpaces';

const LearningSpace = () => {
  const params = useParams();
  const dispatch = useDispatch(); 

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getLearningSpace(params.id)).then((response) => response);
    }
    fetchData();
  },[])

  const {learningSpace} = useSelector((state) => state.learningSpaces);

  return (
    <>
      <Container fluid style={{ marginTop:'10px', marginBottom: '20px' }}>
        <Row>
          <Col md={1} lg={1} sm={12} xs={12}></Col>
          <Col key={learningSpace._id} md={10} lg={10} sm={12} xs={12}>
            <Card style={{ marginTop: '20px' }}>
              <Card.Header style={{ textAlign: 'center' }}>Co-Learing Space {learningSpace._id}</Card.Header>
              <Card.Img variant="top" src={learningSpace?.thumbnail} />
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item style={{ textAlign: 'center', fontSize: '30px' }}>
                    Title: { learningSpace.title }
                  </ListGroup.Item>
                  <ListGroup.Item style={{ textAlign: 'center', fontSize: '30px' }}>
                    Number of Members: { learningSpace.numberOfMembers }
                  </ListGroup.Item>
                  <ListGroup.Item style={{ textAlign: 'center', fontSize: '30px' }}>
                    Last Update: { learningSpace.lastUpdate }
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={1} lg={1} sm={12} xs={12}></Col>
        </Row>
      </Container>
    </>
  )
}

export default LearningSpace