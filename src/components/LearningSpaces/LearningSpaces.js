import { Card, CardHeader ,CardMedia, CardActionArea, CardContent, Typography, Container, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLearningSpaces } from '../../actions/learningSpaces';

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

  if(learningSpaces?.length){
    return (
      <Container component="main" maxWidth="lg">
        <Grid container spacing={2} style={{ marginTop:'20px', marginBottom:'20px' }}>
        {
          learningSpaces.map((learningSpace) => (
            <Grid key={learningSpace._id} item md={4} lg={4}>
              <Card elevation={6} style={{ marginTop: '20px' }}>
                <CardMedia 
                component="img"
                image={learningSpace?.thumbnail}
                height="300"
                alt="Card Image"
                />
                <CardHeader 
                title={learningSpace?.title}
                />
                <CardActionArea onClick={() => handleClick(learningSpace)}>
                  <CardContent>
                    <Typography variant="body1" color="text.secondary" style={{ marginTop:'20px' }}>
                      Number of Members: {learningSpace?.numberOfMembers}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
        </Grid>
      </Container>
    )
  }
}

export default LearningSpaces;