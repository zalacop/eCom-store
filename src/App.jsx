import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Products />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
