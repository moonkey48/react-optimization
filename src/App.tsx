import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading';

const HomePage = lazy(()=> import('./pages/HomePage'));
const UserPage = lazy(()=> import('./pages/UserPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/user' element={<UserPage/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
