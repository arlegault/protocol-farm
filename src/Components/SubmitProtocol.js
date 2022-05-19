import React from 'react'

function SubmitProtocol(props) {
    if (props.history.find(hist => hist.value === 'Access Granted: 19 21 2 13 9 20')) {
    return (
        <a
          className="App-link"
          href="https://forms.gle/FGdKocFmBX6zJZox5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit A Protocol
        </a>
      )
    }
    return (null);
}

export default SubmitProtocol;



