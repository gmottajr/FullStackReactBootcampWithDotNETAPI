import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/styles.css";
import HeaderGm from './components/Header';
import Student from './components/Student';
import MainBody from './components/MainBody';
import FooterGm from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
  <div className='container'>
      <HeaderGm />
      <MainBody />
      <div className='row'>
        Students Enrolled
      </div>
      < Student experience={2} name = 'Kris Walley'/>
      < Student experience={5} name = 'Angel Sanderson'/>
      < Student experience={8} name = 'Rene Parker'/>
      <FooterGm />
  </div>);

