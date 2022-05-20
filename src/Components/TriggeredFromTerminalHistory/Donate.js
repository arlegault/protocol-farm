import React from 'react'

function Donate(props) {
    if (props.history.find(hist => hist.value === 'Access Granted: 4 15 14 1 20 5')) {
    return (
        <p>
          Donate Sol Plz:
          <br/>
          4X5AC81La4DdM7gisMGbwsnPUQqenGsFxa8G81KVfiiA
        </p>
      )
    }
    return (null);
}

export default Donate;
