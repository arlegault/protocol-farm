import React from 'react'

function OpeLinksFromTerminalHistory(props) {
   const openProtocols= () => window.open('/protocols', "_blank")
   const openHyperstructures= () => window.open('https://jacob.energy/hyperstructures.html', "_blank")
   const openLps= () => window.open('/lps', "_blank")



    if (props.history[props.history.length - 1].value === '01101011 01100101 01111001') {
    return (
        <div active={openProtocols()}></div>
      )
    }
     else if (props.history[props.history.length - 1].value === 'Access Granted: 8 25 16 5 18 19 20 18 21 3 20 21 18 5 19') {
     return (
        <div active={openHyperstructures()}></div>
      )
    }
     else if (props.history[props.history.length - 1].value === '$$$$$$$$') {
     return (
        <div active={openLps()}></div>
      )
    } else{
    return (null);
    }
}

export default OpeLinksFromTerminalHistory;
