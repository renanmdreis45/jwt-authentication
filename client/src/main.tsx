import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import Login from './screens/login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route index={true} path='/'></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element></Route>
        <Route path=''>
          <Route path='/profile' /> 
        </Route>
    </Route>
  )
);
root.render(
    <Provider store={store}>
        <React.StrictMode>
          <RouterProvider router={router}/>
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
