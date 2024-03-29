import { TextField, Box, Typography, Grid, Paper, Button, Container, FormControl } from "@mui/material";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase-config';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; 

const SignUp = ({title}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const authentication = getAuth();
        createUserWithEmailAndPassword(authentication,email,password).then((response) => {
            sessionStorage.setItem('Auth Token',response._tokenResponse.refreshToken);
            navigate('/login');
        }).catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                toast.error('Email Already in Use');
            }
        });
    }

    return (
        <Container component="main" maxWidth="md">
            <Paper elevation={6} style={{ marginTop: 50, marginBottom: 50, padding: 50, borderRadius: 15 }}>
                <div style={{ display:'flex', justifyContent: 'center' }}>
                    <LockOutlinedIcon fontSize="large" style={{ color:'black' }} />
                    <Typography variant="h4">{title}</Typography>
                </div>
                <FormControl
                component="form"
                noValidate
                autoComplete="off"
                >
                    <Grid container spacing={2} style={{ marginTop: 10 }}>
                        <Grid item md={6} lg={6}>
                            <Typography variant="h4" style={{ margin: 5 }}>Name:</Typography>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <TextField id="name" variant="outlined" placeholder="Enter Name" style={{ margin: 5, width: '100%' }} />
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <Typography variant="h4" style={{ margin: 5 }}>Email:</Typography>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <TextField id="email" variant="outlined" placeholder="Enter Email" style={{ margin: 5, width: '100%' }} onChange={(e) => setEmail(e.target.value)} />
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <Typography variant="h4" style={{ margin: 5 }}>Password:</Typography>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <TextField variant="outlined" placeholder="Enter Password" style={{ margin: 5, width: '100%' }} onChange={(e) => setPassword(e.target.value)}></TextField>
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="success" type="submit" style={{ marginTop:'30px', width: 'auto' }} onClick={handleSubmit}>Sign Up</Button>
                    <ToastContainer />
                </FormControl>
            </Paper>
        </Container>
    )
}

export default SignUp;