/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import {Home} from "./containers/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './containers/Contact';
import { Header } from './containers/Header';
import { Footer } from './containers/Footer';
import React from 'react';
const root = createRoot(document.getElementById('root'));
const header = createRoot(document.getElementById('root-header'));
const footer = createRoot(document.getElementById('root-footer'));
export default function App() {
  return (
    <React.StrictMode>
    <HashRouter>
     <Routes path="/simplicareyyc_home">
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>       
      </Routes>
      </HashRouter>
   </React.StrictMode>
  );
}
header.render(<Header/>);
root.render(<App/>);
footer.render(<Footer/>)