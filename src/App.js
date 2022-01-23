import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Items from './pages/Items';
import History from './pages/History';
import Statistics from './pages/Statistics';
import { useStore } from './context/store';
import useActions from './hooks/useActions';

function App() {
  const [state] = useStore();
  const { fetchCategories } = useActions();
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Items categories={state.categories} />} />
          <Route path="history" element={<History />} />
          <Route path="statistics" element={<Statistics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
