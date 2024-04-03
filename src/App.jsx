import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Contact from './components/Contact';
import Product from './components/SingleProduct';
import Home from './components/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:id" element={<Product />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
