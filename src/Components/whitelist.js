import React from 'react'
//import { BrowserRouter as Router, Route, useHistory, Link, withRouter, Switch } from "react-router-dom";


function WhiteList(props) {
       console.log(props.history)
      // const [value, setValue] = useState("empty");
       //useEffect(() => { setValue(props) }, [props]);



    if (props.history.find(hist => hist.value === 'Access Granted: 3 12 15 23 14')
) {
    return (

     <a

          className="App-link"
          href="https://forms.gle/k8L4k7EG5T7Q7sG2A"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whitelist
        </a>

)}
    return <p>Coming soon</p>;

}

export default WhiteList;

    //TODO: add routing to another page for bear upload




