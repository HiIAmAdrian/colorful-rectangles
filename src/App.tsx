import React, {  useState } from 'react';
import BoxEditor from './components/BoxEditor';
import BoxInserter from './components/BoxInserter';
import BoxList from './components/BoxList';
//import store from './store/store';
//import { boxRandomAdded } from './actions'

function App() {
  /*useEffect(function(){
      store.dispatch(boxRandomAdded());
      store.dispatch(boxRandomAdded());
      store.dispatch(boxRandomAdded());
  },[]);*/

  const [selectedBox, setSelectedBox] = useState<number | undefined>(undefined);

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
