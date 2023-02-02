/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from "./containers/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root'));


root.render(
<BrowserRouter>
  <Routes>  
      <Route path="./" element={<Home />} />
      <Route path="./home" element={<Home />} />
  </Routes>
</BrowserRouter>);