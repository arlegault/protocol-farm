import React from "react";
import Button from '@mui/material/Button';
import ProtocolCardList from '../Components/ProtocolPageComponents/ProtocolCardList2.js';
//Functional Component
const Protocols = () => {
  return (
    <div className="App-link">
      <h1>Hottest Protocols</h1>
      <ProtocolCardList/>
      <p></p>
 <Button variant="outlined" href="https://forms.gle/FGdKocFmBX6zJZox5">
        Submit A Protocol
        </Button>

    </div>
  );
};

export default Protocols;