import './App.css';
import LogIn from './components/Authentication/LogIn';
import SignUp from './components/Authentication/SignUp';
import ClientProfile from './components/Profile/ClientProfile';
import LearningSpace from './components/LearningSpaces/LearningSpace/LearningSpace';
import LearningSpaces from './components/LearningSpaces/LearningSpaces';
import CreateLearningSpace from './components/LearningSpaces/CreateLearningSpace';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/signup" element={<SignUp title="Sign up to start learning" />}>Sign Up</Route>
          <Route path="/login" element={<LogIn title="Join our learning space below" />}>Log In</Route>
          <Route path="/home" element={<Home />}>Home</Route>
          <Route path="/profile" element={<ClientProfile />}>Profile</Route>
          <Route path="/learning-spaces/:id/learning-space" element={<LearningSpace />}>Learning Space</Route>
          <Route path="/learning-spaces" element={<LearningSpaces />}></Route>
          <Route path="/learning-spaces/create-learning-space" element={<CreateLearningSpace />}></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
