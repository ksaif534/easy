import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup  from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getLearningSpace} from '../../../actions/learningSpaces';
import { useNavigate } from 'react-router-dom';
import { app,db } from '../../../firebase-config';
import { collection,getDocs } from 'firebase/firestore';
import {fetchPosts} from '../../../actions/posts';

const LearningSpace = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authCheck = sessionStorage.getItem('Auth Token');

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getLearningSpace(params.id)).then((response) => response);
      dispatch(fetchPosts(params.id));
    }
    fetchData();
  },[])

  const navigateToProfile = async () => {
    const query = await getDocs(collection(db,"userProfiles"));
    query.forEach((doc) => {
      const response = JSON.parse(JSON.stringify(doc.data()));
      if (response.name === "Saif Kamal") {
        navigate(`/profiles/client-profile/${doc?.id}`);
      }
    });
  }

  const {learningSpace} = useSelector((state) => state.learningSpaces);
  const {posts} = useSelector((state) => state.posts);

  const getItemProfile = (e) => {
    e.preventDefault();
    navigateToProfile();
  }

  const createPost = (e) => {
    e.preventDefault();
    navigate(`/learning-spaces/learning-space/${params.id}/posts/create-post`);
  }

  return (
    <>
      <Container fluid style={{ marginTop:'10px', marginBottom: '20px' }}>
        <Row>
          <Col md={1} lg={1} sm={12} xs={12}></Col>
          <Col key={learningSpace?._id} md={10} lg={10} sm={12} xs={12}>
            <Card style={{ marginTop: '20px' }}>
              <Card.Header style={{ textAlign: 'center', fontWeight:'bold' }}>Co-Learing Space {learningSpace?._id}</Card.Header>
              <Card.Img variant="top" src={learningSpace?.thumbnail} />
              <Card.Body>
                <ListGroup style={{ textAlign: 'center', fontSize: '30px', marginBottom: '20px', fontFamily: 'Raleway'}} variant="flush">
                  <ListGroup.Item>
                    <span style={{ fontWeight: 'bold' }}>Title:</span> { learningSpace?.title }
                    {
                      authCheck && (
                        <>
                          <Button variant="outline-primary" style={{ marginLeft: '20px' }}>Join</Button>
                        </>
                      )
                    }
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{ fontWeight: 'bold' }}>Number of Members:</span> { learningSpace?.numberOfMembers }
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{ fontWeight: 'bold' }}>Last Update:</span> { learningSpace?.lastUpdate }
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{ fontWeight:'bold' }}>Prerequisites:</span> N/A
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{ fontWeight:'bold', marginRight: '20px' }}>
                      Posts:
                    </span>
                    <Button variant="outline-success" style={{ marginBottom:'5px' }} onClick={createPost}>Create a Post</Button>
                    <ListGroup style={{ textAlign: 'center', fontSize: '20px', marginBottom: '10px' }} variant="flush">
                      {
                        posts.map((post) => (
                          <>
                            <ListGroup.Item style={{ marginBottom: '10px', marginTop:'5px' }} key={post._id}>{post.title}</ListGroup.Item>
                          </>
                        ))
                      }
                    </ListGroup>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{ fontWeight: 'bold' }}>Active Users:</span>
                    <ListGroup style={{ textAlign: 'center', fontSize: '20px', marginBottom: '10px'}} variant="flush">
                      <ListGroup.Item onClick={getItemProfile} style={{ marginBottom:'10px', marginTop:'5px' }}>Saif Kamal</ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{ fontWeight:'bold' }}>Related Learning Spaces:</span>
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