import NavBar from './Navigation/NavBar';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LearningSpaces from './LearningSpaces/LearningSpaces';

const Home = () => {

    const authToken = sessionStorage.getItem("Auth Token");
    const navigate  = useNavigate();

    useEffect(() => {
        if (authToken) {
            navigate('/home');
        } else {
            navigate('/login');
        }
    },[])

    return (
        <div>
            <NavBar />
            <LearningSpaces />
        </div>
    )
}

export default Home