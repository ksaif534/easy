import { Typography } from "@mui/material";

const SectionHeader = () => {

    const authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
        return (
            <Typography variant="h2" style={{ textAlign: 'center', marginTop: '10px', marginBottom: '20px', fontFamily: 'cursive, sans-serif' }}>Join our Learning Space Below</Typography>
        )   
    } else {
        return (
            <Typography variant="h2" style={{ textAlign: 'center', marginTop: '10px', marginBottom: '20px', fontFamily: 'cursive, sans-serif' }}>Sign Up to start learning</Typography>
        )
    }
}

export default SectionHeader