import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Items from './pages/Items';
import History from './pages/History';
import Statistics from './pages/Statistics';
import { useStore } from './context/store';
import useFetch from './hooks/useFetch';

function App() {
  const { data: categories, setData: setCategories } = useFetch({
    method: 'GET',
    url: `/api/categories`,
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Items categories={categories} />} />
          <Route path="history" element={<History />} />
          <Route path="statistics" element={<Statistics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
