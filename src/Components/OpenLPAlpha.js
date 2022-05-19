import React from 'react'

function OpenLPAlpha(props) {
   const openlink= () => window.open('/lps', "_blank")

    if (props.history[props.history.length - 1].value === '$$$$$$$$') {
    return (
        <div active={openlink()}></div>
      )
    }
    return (null);
}

export default OpenLPAlpha;
