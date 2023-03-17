import Card  from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLearningSpaces } from '../../actions/learningSpaces';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LearningSpaces = () => {

  const authCheck = sessionStorage.getItem('Auth Token');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getLearningSpaces()).then((response) => response);
    }
    if (authCheck) {
      fetchData();  
    }
  },[authCheck,dispatch]);

  const { learningSpaces, isLoading } = useSelector((state) => state.learningSpaces);

  const handleClick = (learningSpace) => {
    navigate(`/learning-spaces/${learningSpace._id}/learning-space`);
  }

  if (!learningSpaces?.length && !isLoading) {
    return 'No Learning Spaces Available';
  }

  if (learningSpaces?.length) {
    return (
      <>
        <Container fluid>
          <Row>
          {
            learningSpaces.map((doc) => (
              <Col key={doc._id} md={4} lg={4} sm={6} xs={12}>
                <Card style={{ width:'auto', marginLeft: '20px', marginBottom: '20px', fontFamily:'Raleway' }} onClick={() => handleClick(doc)}>
                  <Card.Header style={{ textAlign: 'center', fontWeight:'bold' }}>Co-learning Space {doc._id}</Card.Header>
                  <Card.Img variant="top" src={doc?.thumbnail} />
                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item style={{ textAlign: 'center' }}>Title: {doc.title}</ListGroup.Item>
                      <ListGroup.Item style={{ textAlign: 'center' }}>Number of Members: {doc.numberOfMembers} </ListGroup.Item>
                      <ListGroup.Item style={{ textAlign: 'center' }}>Last Update: {doc.lastUpdate}</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
          </Row>
        </Container>
      </>
    ) 
  }
}

export default LearningSpaces;