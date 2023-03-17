import NavBar from './Navigation/NavBar';
import { useNavigate } from 'react-router-dom';
import LearningSpaces from './LearningSpaces/LearningSpaces';
import SectionHeader from './SectionHeader';

const Home = () => {
    const navigate  = useNavigate();

    return (
        <div>
            <NavBar />
            <SectionHeader />
            <LearningSpaces />
        </div>
    )
}

export default Home