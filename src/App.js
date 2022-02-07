import React from 'react';
import SocialNetwork from './components/Social';

import './style.css'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">Social</header>
      <div id="content">
        <SocialNetwork />
      </div>
    </div>
  );
}
