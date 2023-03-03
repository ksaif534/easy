import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import 'react-tagsinput/react-tagsinput.css';
import ProfileForm from './ProfileForm';
import { useState } from 'react';
import Saif from '../../images/saif.jpeg';

const ClientProfile = () => {

    const [data,setData] = useState([]);

    const fetchData = (response) => {
        response.forEach((doc) => {
            setData(data.push(JSON.parse(JSON.stringify(doc.data()))));
        })
        console.log(data);
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                    {
                        (data.length > 0) ? 
                            data.map(item => {
                                <>
                                    <Card elevation={6} style={{ display:'flex', flexDirection:'row', borderRadius: '20px', margin: 20, height: '100%' }}>
                                        <CardMedia image={item.thumbnail} component='img' />
                                        <CardContent>
                                            <Grid container spacing={2}>
                                                <Grid item md={6}>
                                                    <Typography variant="h5">Name:</Typography>
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
                            })
                            :
                            <>
                                <Card elevation={6} style={{ display:'flex', flexDirection:'row', borderRadius: '20px', margin: 20, height: '100%' }}>
                                    <CardMedia image={Saif} component='img' />
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item md={6}>
                                                <Typography variant="h5">Name:</Typography>
                                            </Grid>
                                            <Grid item md={6}>
                                                <Typography variant="h5">Saif Kamal</Typography>
                                            </Grid>
                                            <Grid item md={6}>
                                                <Typography variant="h5">Biography:</Typography>
                                            </Grid>
                                            <Grid item md={6}>
                                                <Typography variant="h6">Hi I'm Saif. I'm a passionate software developer with a deep passion to learn new technologies & build new projects.</Typography>
                                            </Grid>
                                            <Grid item md={6}>
                                                <Typography variant="h5">Country of Residence:</Typography>
                                            </Grid>
                                            <Grid item md={6}>
                                                <Typography variant="h5">Bangladesh</Typography>
                                            </Grid>
                                            <Grid item md={6}>
                                                <Typography variant="h5">Interests:</Typography>
                                            </Grid>
                                            <Grid item md={6}>
                                                <Typography variant="h5">
                                                    #JS#PHP#Python
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </>
                    }
                </Grid>
                <Grid item md={1}></Grid>
            </Grid>
            <ProfileForm renderData={fetchData} />
        </div>
    )
}

export default ClientProfile;