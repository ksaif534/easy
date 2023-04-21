
import { Card, Container, Button, Typography, Grid, CardMedia, CardContent, List, ListItem, ListItemButton, ListItemText, Collapse, ListItemIcon } from '@mui/material';
import { StarBorder, ExpandLess, ExpandMore } from '@mui/icons-material';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLearningSpace } from '../../../actions/learningSpaces';
import { useNavigate } from 'react-router-dom';
import { app,db } from '../../../firebase-config';
import { collection,getDocs } from 'firebase/firestore';
import { fetchPosts } from '../../../actions/posts';

const LearningSpace = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authCheck = sessionStorage.getItem('Auth Token');
  const [open,setOpen] = useState(false);

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

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <Container component="main" maxWidth="lg">
      <Grid container spacing={2} style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Grid item md={1} lg={1}></Grid>
        <Grid item md={10} lg={10}>
          <Card elevation={6} style={{ marginTop: '10px' }}>
            <CardMedia
            component='img'
            image={learningSpace?.thumbnail}
            height="500"
            alt="Image"
            />
            <CardContent>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Typography variant="h5">Title:</Typography>
                    <ListItemText primary={learningSpace?.title} style={{ marginLeft:'10px' }} />
                    {
                      authCheck && (
                        <Button variant="outlined">Join</Button>
                      )
                    }
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Typography variant="h5">Number of Members:</Typography>
                    <ListItemText primary={learningSpace?.numberOfMembers} style={{ marginLeft:'10px' }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Typography variant="h5">Last Update:</Typography>
                    <ListItemText primary={learningSpace?.lastUpdate} style={{ marginLeft:'10px' }}></ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                      <Typography variant="h5">Prerequisites:</Typography>
                      <ListItemText primary="N/A" style={{ marginLeft:'10px' }}></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleClick}>
                      <Typography variant="h5">Posts:</Typography>
                      { open ? <ExpandLess /> : <ExpandMore /> }
                      <Button variant="outlined">Create Post</Button>
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl:4 }}>
                          {
                            posts.map((post) => (
                              <ListItemText key={post._id} primary={post?.title} />
                            ))
                          }
                        </ListItemButton>
                      </List>
                    </Collapse>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={1} lg={1}></Grid>
      </Grid>
    </Container>
  )  
}

export default LearningSpace