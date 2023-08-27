import './App.css'
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Sign_in from './components/singup_signin/Sign_in';
import Sign_up from './components/singup_signin/Sign_up';
import Cart from './components/cart/Cart';
import { Routes, Route } from 'react-router-dom';
import Buynow from './components/buynow/Option';





function App() {
  return (
    <>
    <h2> App JS</h2>
    <Navbaar />
    <Newnav /> 
    <Routes>
      <Route path='/' element= {<Maincomp />}/>
      <Route path='/Login' element= {<Sign_in />}/>
      <Route path='/Register' element= {<Sign_up />}/>
      <Route path='/getproductsone/:id' element= {<Cart />}/>
      <Route path='/buynow' element= {<Buynow />}/>
      
    </Routes>
    
    <Footer />
    </>

    
  );
}

export default App;