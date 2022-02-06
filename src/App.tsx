import React from 'react';
import BoxEditor from './components/BoxEditor';
import BoxInserter from './components/BoxInserter';
import BoxList from './components/BoxList';

function App() {

  
  return (
    <div className="main-container">
      <h1 className="title">Colorful Rectangles Editor</h1>
      <div className="controls-row">
        <BoxInserter/>
        <BoxEditor/>
      </div>
      <BoxList/>
    </div>
  );
}

export default App;
