/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import {Home} from "./containers/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './containers/Contact';
import { Header } from './containers/Header';
import { Footer } from './containers/Footer';
import React from 'react';
import { Rental } from './containers/Rental';
import { Mobility } from './containers/Mobility';
import { Health } from './containers/Health';
const root = createRoot(document.getElementById('root'));
export default function App() {
  return (
      <><Header /><HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/mobility" element={<Mobility />}></Route>
        <Route path="/health" element={<Health />}></Route>
        <Route path="/rental" element={<Rental />}></Route>
      </Routes>
    </HashRouter><Footer /></>
  );
}

root.render(<App/>);
