import {  useState } from 'react';
import BoxEditor from './components/BoxEditor';
import BoxInserter from './components/BoxInserter';
import BoxList from './components/BoxList';

function App() {
  const [selectedBox, setSelectedBox] = useState(0);

  const BoxEditorProps={
    id: selectedBox
  }

  const BoxListProps={
    id: selectedBox,
    setSelectedBox: setSelectedBoxFromChild
  }

  function setSelectedBoxFromChild(id: number){
    setSelectedBox(id);
  }
  
  return (
    <div className="main-container">
      <h1 className="title">Colorful Rectangles Editor</h1>
      <div className="controls-row">
        <BoxInserter/>
        <BoxEditor {...BoxEditorProps}/>
      </div>
      <BoxList {...BoxListProps}/>
    </div>
  );
}

export default App;
