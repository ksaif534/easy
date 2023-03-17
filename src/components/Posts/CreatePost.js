import { Grid, Container, Paper, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createPost } from '../../actions/posts';
import { useDispatch } from 'react-redux';

const CreatePost = () => {

    const initState = { title: '', message: '', createdAt: null };
    const [formData,setFormData] = useState(initState);
    const param = useParams();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const submitPost = (e) => {
        e.preventDefault();
        let formInput = {
            title: formData.title,
            message: formData.message,
            createdAt: new Date()
        };
        dispatch(createPost(formInput,param.id));
    }

    return (
        <Container component="main" maxWidth="md">
            <Paper component="form" elevation={6} style={{ borderRadius: 15, marginTop: 50, marginBottom: 50, padding: 50 }}>
                <div style={{ display:'flex', justifyContent:'center' }}>
                    <Typography variant="h3" style={{ textAlign:'center', fontFamily:'Raleway' }}>Create a Post</Typography>
                </div>
                <Grid container spacing={2} style={{ marginLeft:'10px', marginTop:'10px', marginBottom:'10px' }}>
                    <Grid item md={6} lg={6}>
                        <Typography variant="h4" style={{ fontFamily:'Raleway' }}><span style={{ fontWeight:'bold' }}>Post Title:</span></Typography>
                    </Grid>
                    <Grid item md={6} lg={6}>
                        <TextField name="title" variant="filled" onChange={handleChange} style={{ width:'100%', fontFamily:'Raleway' }} />
                    </Grid>
                    <Grid item md={6} lg={6}>
                        <Typography variant="h4" style={{ fontFamily:'Raleway' }}><span style={{ fontWeight:'bold' }}>Post Message:</span></Typography>
                    </Grid>
                    <Grid item md={6} lg={6}>
                        <TextField name="message" variant="filled" onChange={handleChange} style={{ width:'100%', fontFamily:'Raleway' }} />
                    </Grid>
                    <Button variant="outlined" type="submit" style={{ width:'100%', marginTop:'30px' }} onClick={submitPost}>Submit</Button>
                </Grid>
            </Paper>
        </Container>
    )
}

export default CreatePost