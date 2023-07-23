import React from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
 } from 'react-router-dom';
 import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
    </>
  )
};

export default App;
