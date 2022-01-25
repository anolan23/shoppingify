import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Items from './pages/Items';
import History from './pages/History';
import Statistics from './pages/Statistics';
import { useStore } from './context/store';
import useActions from './hooks/useActions';
import CancelListPopup from './components/CancelListPopup';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [state] = useStore();
  const { fetchItems, setStore, setShowCancelListPopup } = useActions();

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem('store'));
    store && setStore(store);
  }, []);

  useLocalStorage();

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Items items={state.items} />} />
          <Route path="history" element={<History />} />
          <Route path="statistics" element={<Statistics />} />
        </Route>
      </Routes>
      <CancelListPopup
        show={state.showCancelListPopup}
        close={() => setShowCancelListPopup(false)}
      >
        Popup
      </CancelListPopup>
    </BrowserRouter>
  );
}

export default App;
