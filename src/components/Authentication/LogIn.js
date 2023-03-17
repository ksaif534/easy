import { Button, Typography, Grid, TextField, Paper, FormControl, Container } from "@mui/material";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LogIn = ({title}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const authentication = getAuth();
        signInWithEmailAndPassword(authentication,email,password).then((response) => {
            sessionStorage.setItem('Auth Token',response._tokenResponse.refreshToken);
            navigate('/home');
        }).catch((error) => {
            if (error.code === 'auth/wrong-password') {
                toast.error('Please Check Your Password');
            }
            if (error.code === 'auth/user-not-found') {
                toast.error('Please Check Your Email');
            }
        });
    }

    return (
        <Container component="main" maxWidth="md">
            <Paper elevation={6} style={{ marginTop: 50, marginBottom: 50, padding: 50, borderRadius: 15 }}>
                <div style={{ display:'flex', justifyContent: 'center' }}>
                    <div style={{ backgroundColor: 'gray', borderRadius: '50%', width: 'auto' }}>
                        <LockOutlinedIcon fontSize="large" style={{ color:'white' }} />
                    </div>
                    <Typography variant="h4">{title}</Typography>
                </div>
                <FormControl
                component="form"
                autoComplete="off"
                noValidate
                >
                    <Grid container spacing={2} style={{ marginTop: 10 }}>
                        <Grid item md={6} lg={6}>
                            <Typography variant="h4">Email:</Typography>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <TextField id="email" variant="filled" placeholder="Enter Email" style={{ width: '100%' }} onChange={(e) => setEmail(e.target.value)} />
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <Typography variant="h4">Password:</Typography>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <TextField id="password" variant="filled" placeholder="Enter Password" style={{ width: '100%' }} onChange={(e) => setPassword(e.target.value)} />
                        </Grid>
                    </Grid>
                    <Button variant="outlined" style={{ margin: 15, width: '100%' }} onClick={handleSubmit}>Log In</Button>
                    <ToastContainer />
                </FormControl>
            </Paper>
        </Container>
    )
}

export default LogIn;
