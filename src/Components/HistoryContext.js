import React from "react";

// set the defaults
const HistoryContext = React.createContext({
    globalHistory: "",
    setGlobalHistory: () => {}
});

export default HistoryContext;