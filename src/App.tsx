import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading';
import LazyLoaderPage from './pages/LazyLoaderPage';

const HomePage = lazy(()=> import('./pages/HomePage'));
const UserPage = lazy(()=> import('./pages/UserPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/user' element={<UserPage/>} />
          <Route path='/lazyload' element={<LazyLoaderPage/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
