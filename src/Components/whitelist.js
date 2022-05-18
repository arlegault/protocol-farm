import React from 'react'

function WhiteList(props) {
    if (props.history.find(hist => hist.value === 'Access Granted: 3 12 15 23 14')) {
    return (
        <a
          className="App-link"
          href="https://forms.gle/k8L4k7EG5T7Q7sG2A"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whitelist
        </a>
      )
    }
    return <p>Coming soon</p>;
}

export default WhiteList;



