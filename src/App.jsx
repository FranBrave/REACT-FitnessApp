import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

//Pages&Components
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const  App = () => {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/exercise/:id' element={ <ExerciseDetail />} />
        <Route path='/login' element={ <LoginForm />} />
        <Route path='/signup' element={ <RegisterForm/> } />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App; 
