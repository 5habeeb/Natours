import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Popup from './components/popup';
import Navigation from './components/navigation';

const jsx = (
  <div>
    <Header />
    <Main />
    <Footer />
    <Popup />
    <Navigation />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));