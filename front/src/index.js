import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import  HomeScreen  from "../src/Screens/HomeScreen";
import  ProductScreen  from "../src/Screens/ProductScreen";
  import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ProfileScreen from './Screens/ProfileScreen';

import PaymentScreen from './Screens/PaymentScreen';
import Carddetails from './components/Carddetails';
import Orderscreen from './Screens/Orderscreen';




const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen />}/>
      <Route  path='/product/:id' element={<ProductScreen />}/>
      <Route path='/cart' element={<CartScreen/>}></Route>
      <Route path='/register' element={<RegisterScreen/>}></Route>
      <Route path='/login' element={<LoginScreen/>}></Route>
      <Route path='/profile' element={<ProfileScreen></ProfileScreen>}> </Route>
      <Route path='/payment' element={<PaymentScreen></PaymentScreen>}> </Route>
      <Route path='/card' element={<Carddetails></Carddetails>}> </Route>
      <Route path='/order' element={<Orderscreen></Orderscreen>}> </Route>
      




    </Route>
    
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  

     <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>
);


reportWebVitals();
