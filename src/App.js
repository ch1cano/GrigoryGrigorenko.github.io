import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import './App.css';
import './styles/main.css'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App;
