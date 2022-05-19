import React from 'react'

function OpenProtocolsPage(props) {
   const openlink= () => window.open('/protocols', "_blank")

    if (props.history[props.history.length - 1].value === '01101011 01100101 01111001') {
    return (
        <div active={openlink()}></div>
      )
    }
    return (null);
}

export default OpenProtocolsPage;
