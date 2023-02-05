/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from "./containers/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './containers/Contact';
import { Header } from './containers/Header';
import { Footer } from './containers/Footer';
const root = createRoot(document.getElementById('root'));
const header = createRoot(document.getElementById('root-header'));
const footer = createRoot(document.getElementById('root-footer'));
export default function App() {
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
       
      </Routes>
    </BrowserRouter>
  );
}
header.render(<Header/>);
root.render(<App/>);
footer.render(<Footer/>)