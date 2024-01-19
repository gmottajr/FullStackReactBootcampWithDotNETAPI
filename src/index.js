import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/styles.css";
import HeaderGm from './components/Layout/Header';
import MainBody from './components/MainBody';
import FooterGm from './components/Layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
  <div className='container' style={{backgroundColor:"blueviolet", color:"#eee"}}>
      <HeaderGm />
      <div className='px-4'>
        <MainBody />
      </div>
      <FooterGm />
  </div>);

