import { useParams } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { app,db } from '../../firebase-config';
import { collection,getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const ClientProfile = () => {
    const param = useParams();
    const [profile,setProfile] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const query = await getDocs(collection(db,"userProfiles"));
            query.forEach((doc) => {
                const response = JSON.parse(JSON.stringify(doc.data()));
                if (doc.id === param.profileId) {
                    setProfile(response);
                }
            });
        }
        fetchData();
    },[param]);

    return (
        <Grid container spacing={2} style={{ marginTop:'20px' }}>
            <Grid item md={1}></Grid>
            <Grid item md={10}>
                <Card elevation={6} style={{ display: 'flex', flexDriction:'row', borderRadius: '20px', maringTop: '20px', height: '100%' }}>
                    <CardContent>
                        <Grid container spacing={2} style={{ marginTop:'10px' }}>
                            <Grid item md={12}>
                                <Typography style={{ fontSize: '30px', fontFamily:'Raleway' }}><span style={{ fontWeight: 'bold', marginRight:'10px' }}>Name:</span><span style={{ fontSize:'20px' }}>{profile?.name}</span></Typography>
                            </Grid>
                            <Grid item md={12}>
                                <Typography style={{ fontSize:'30px', fontFamily:'Raleway' }}><span style={{ fontWeight:'bold', marginRight:'10px' }}>Country:</span><span style={{ fontSize:'20px' }}>{profile?.country}</span></Typography>
                            </Grid>
                            <Grid item md={12}>
                                <Typography style={{ fontSize:'30px', fontFamily:'Raleway' }}><span style={{ fontWeight:'bold', marginRight:'10px' }}>Bio:</span><span style={{ fontSize:'20px' }}>{profile?.bio}</span></Typography>
                            </Grid>
                            <Grid item md={12}>
                                <Typography style={{ fontSize:'30px', fontFamily:'Raleway' }}>
                                    <span style={{ fontWeight:'bold', marginBottom:'10px' }}>Interests:</span>
                                </Typography>
                                <ul style={{ fontFamily:'Raleway', fontSize:'20px' }}>
                                    {
                                        profile?.interests.map((interest,index) => 
                                            (
                                                <>
                                                    <li key={index}>
                                                        {interest}
                                                    </li>
                                                </>
                                            )
                                        )
                                    }
                                </ul>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={1}></Grid>
        </Grid>
    )
}

export default ClientProfile