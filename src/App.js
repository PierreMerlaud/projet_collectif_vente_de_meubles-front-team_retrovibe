import './App.css';
import Header  from './Composants/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Connexion from './Pages/Connexion';
import Cart from './Pages/Cart';
import MonCompte from './Pages/MonCompte';
import ConnectedClient from './Pages/ConnectedClient';
import ConnectedAdmin from './Pages/ConnectedAdmin';
import Product from './Pages/Product';
import Footer  from './Composants/Footer';

function App() {
  return (
    <>
    <Header/> 
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/connexion' element={<Connexion/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/moncompte' element={<MonCompte/>}/>
      <Route path='/connectedclient' element={<ConnectedClient/>}/>
      <Route path='/connectedadmin' element={<ConnectedAdmin/>}/>
      <Route path='/product' element={<Product/>}/>
    </Routes>
    <Footer/> 
    </>
  );
}

export default App;
