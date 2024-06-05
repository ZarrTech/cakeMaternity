import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './component/Navbar.tsx'
import Footer from './component/Footer.tsx'
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <App  />
        <Footer/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
