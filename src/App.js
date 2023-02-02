import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Contacts from './pages/Contacts';

import './App.css';
import './styles/main.css'
import Home from './pages/Home';

 

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Navbar />
          <Routes>
              <Route path='/*' element={<Home/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
          </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
