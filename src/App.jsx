import { useState } from 'react'
import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App
