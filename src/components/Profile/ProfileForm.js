import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TagsInput from 'react-tagsinput';
import { Container } from '@mui/system';
import { MenuItem, Paper, Select, TextField, Button, Grid, Typography, FormControl } from '@mui/material';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

const ProfileForm = () => {
    const [tags,setTags] = useState([]);
    const [file,setFile] = useState(null);
    const initState = {name: '', bio: '', country: '', interests: [], thumbnail: null};
    const [formData,setFormData] = useState(initState);

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        //For Firebase Storage
        let formInput = {
            name: formData.name,
            bio: formData.bio,
            country: formData.country,
            interests: tags,
            thumbnail: file.name
        };
        try {
            const docRef = await addDoc(collection(db,"userProfiles"),formInput);
        } catch (error) {
            console.log(`Error Adding Document: ${error}`);  
        }
    }

    return (
        <Container component="form" maxWidth="md" autoComplete="off" noValidate>
            <Paper elevation={6} style={{ marginTop: 50, marginBottom: 50, padding: 20, borderRadius: 15 }}>
                <div style={{ display:'flex', justifyContent: 'center' }}>
                    <div style={{ backgroundColor: 'gray', borderRadius: '50%', width: 'auto' }}>
                        <LockOutlinedIcon fontSize="large" style={{ color:'white' }} />
                    </div>
                    <Typography variant="h4">Create Profile</Typography>
                </div>
                <FormControl>
                    <Grid container spacing={2} style={{ marginTop: 10 }}>
                        <Grid item md={6} lg={6}>
                            <Typography variant="h5">Name:</Typography>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <TextField name="name" variant="filled" style={{ width: '100%' }} onChange={handleChange}></TextField>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <Typography variant="h5">Biography:</Typography>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <TextField name="bio" variant="filled" style={{ width: '100%' }} onChange={handleChange}></TextField>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <Typography variant="h5">Country of Residence:</Typography>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <Select variant="filled" name="country" style={{ width: '100%' }} onChange={handleChange} value={formData.country}>
                                <MenuItem value="America">America</MenuItem>
                                <MenuItem value="Australia">Australia</MenuItem>
                                <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                                <MenuItem value="Canada">Canada</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <Typography variant="h5">Interests:</Typography>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <TagsInput value={tags} onChange={setTags} />
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <Typography variant="h5">Thumbnail:</Typography>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <TextField type="file" onChange={handleFileChange} variant="filled" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                </FormControl>
                <Button variant="outlined" style={{ marginTop: '30px', marginRight: '20px', marginLeft: '20px', width: 'auto' }} onClick={handleFormSubmit}>Create Profile</Button>
            </Paper>
        </Container>
    )
}

export default ProfileForm