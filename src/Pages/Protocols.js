import React from "react";
import ProtocolCardList from '../Components/ProtocolPageComponents/ProtocolCardList.js'
//Functional Component
const Protocols = () => {
  return (
    <div className="App-link">
      <h1>Coming Soon</h1>
      <ProtocolCardList/>
       <a
          className="App-link"
          href="https://forms.gle/FGdKocFmBX6zJZox5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit A Protocol
        </a>
    </div>
  );
};

export default Protocols;