import React, { useState } from 'react';
import './App.css';
import WineTable from './components/WineTable.jsx';
import WineDetails from './components/WineDetails.jsx';

function App() {
  

  const [selectedWineId, setSelectedWineId] = useState(null);

  const handleWineSelect = (id) => {
    setSelectedWineId(id);
  };

  return (
    <div className="App" style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <WineTable onWineSelect={handleWineSelect} />
      </div>
      <div style={{ flex: 1 }}>
        {selectedWineId && <WineDetails wineId={selectedWineId} />}
      </div>
    </div>
  );
}

export default App;
