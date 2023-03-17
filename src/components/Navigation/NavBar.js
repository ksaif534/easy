import { AppBar, Toolbar, Avatar, Typography, FormControl, Select, MenuItem } from "@mui/material";
import Saif from '../../images/saif.jpeg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {

    const navigate = useNavigate();
    const [open,setOpen] = useState(false);
    const [value,setValue] = useState('');

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login');
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleProfiles = () => {
        navigate('/profiles');
    }

    const handleLearningSpace = () => {
        navigate(`/learning-spaces/create-learning-space`);
    }

    return (
        <AppBar position="static" color="inherit"
        style={{ display: 'flex', flexDirection: 'row', margin: '20px 0', borderRadius: 15}}>
            <Toolbar style={{ display: 'flex', justifyContent: 'flex-start', width: '50%'}}>
                <div style={{ display: 'flex', width: '100%'}}>
                    <Typography variant="h5" style={{ fontFamily:'Raleway' }}>Saif Kamal</Typography>
                </div>
            </Toolbar>
            <Toolbar style={{ display: 'flex', justifyContent: 'flex-end', width: '50%'}}>
                <Avatar src={Saif} />
                <FormControl style={{ display: 'flex', padding: '10px', margin: '10px' }}> 
                    <Select
                    variant="filled"
                    onOpen={handleOpen}
                    onClose={handleClose}
                    onChange={handleChange}
                    value={value}
                    >
                        <MenuItem value="Profile" onClick={handleProfiles} style={{ fontFamily: 'Raleway' }}>Profile</MenuItem>
                        <MenuItem value="Create Learning Space" onClick={handleLearningSpace} style={{ fontFamily: 'Raleway' }}>Create Learning Space</MenuItem>
                        <MenuItem value="Logout" onClick={handleLogout} style={{ fontFamily: 'Raleway' }}>Logout</MenuItem>
                    </Select>
                </FormControl>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;