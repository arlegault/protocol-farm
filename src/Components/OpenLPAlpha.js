import React from 'react'

function OpenLPAlpha(props) {
   const openlink= () => window.open('/lps', "_blank")


    if (props.history.find(hist => hist.value === '$$$$$$$$')) {
    return (
        <div active={openlink()}></div>
      )
    }
    return (null);
}

export default OpenLPAlpha;