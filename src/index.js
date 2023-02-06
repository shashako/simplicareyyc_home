/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import {Home} from "./containers/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './containers/Contact';
import { Header } from './containers/Header';
import { Footer } from './containers/Footer';
import React from 'react';
import { Rentail } from './containers/Rentail';
const root = createRoot(document.getElementById('root'));
export default function App() {
  return (
      <><Header /><HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/rentail" element={<Rentail />}></Route>
      </Routes>
    </HashRouter><Footer /></>
  );
}

root.render(<App/>);
