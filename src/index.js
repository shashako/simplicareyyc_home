/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from "./containers/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
 
const root = createRoot(document.getElementById('root'));
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/simplicareyyc_home/" element={<Home />}>          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(<App></App>);