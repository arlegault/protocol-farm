import React from 'react'

function OpenMegastructures(props) {
   const openlink= () => window.open('https://jacob.energy/hyperstructures.html', "_blank")


    if (props.history.find(hist => hist.value === 'Access Granted: 8 25 16 5 18 19 20 18 21 3 20 21 18 5 19')) {
    return (
        <div active={openlink()}></div>
      )
    }
    return (null);
}

export default OpenMegastructures;



