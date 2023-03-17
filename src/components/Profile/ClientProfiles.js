import { Card, CardContent, Grid, Typography } from '@mui/material';
import 'react-tagsinput/react-tagsinput.css';
import ProfileForm from './ProfileForm';
import { useState, useEffect } from 'react';
import { app,db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const ClientProfiles = () => {

    const [data,setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getDocs(collection(db,"userProfiles"));
            response.forEach((doc) => {
                setData([...data,JSON.parse(JSON.stringify(doc.data()))]);
            });
            console.log(data);
        }
        fetchData();
    },[])

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                    {
                        (data.length > 0) && 
                            data.map(item => (
                                <>
                                    <Card elevation={6} style={{ display:'flex', flexDirection:'row', borderRadius: '20px', margin: 20, height: '100%' }}>
                                        <CardContent>
                                            <Grid container spacing={2}>
                                                <Grid item md={6}>
                                                    <Typography variant="h5"><span style={{ fontFamily:'Raleway' }}>Name:</span></Typography>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <Typography variant="h5">{item.name}</Typography>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <Typography variant="h5">Biography:</Typography>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <Typography variant="h6">{item.bio}</Typography>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <Typography variant="h5">Country of Residence:</Typography>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <Typography variant="h5">{item.country}</Typography>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <Typography variant="h5">Interests:</Typography>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <Typography variant="h5">
                                                        {
                                                            item.interests.map(element => element)
                                                        }
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </>
                            ))
                    }
                </Grid>
                <Grid item md={1}></Grid>
            </Grid>
            <ProfileForm />
        </div>
    )
}

export default ClientProfiles;