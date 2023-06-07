import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cities from './app/Cities';
import States from './app/States';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Cities />} />
        <Route exact path="/cidades" element={<Cities />} />
        <Route exact path="/estados" element={<States />} />
      </Routes>
    </BrowserRouter>
  );
}
