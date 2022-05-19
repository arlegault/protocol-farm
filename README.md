# Protocol Farm

Protocol Farm will help new protocols get discovered and provide insight on the world of web3 liquidity providers. 

## How stuff works

The main page renders a gamified terminal component. Based user interaction in the component, history is appended a value. We trigger other actions based on the latest value of history. Built from basic create react app foundation. Hosted on netlify. Domain through porkbun.

### `The Terminal`

Forked from react-bash.

Not very reacty history hook is passed down from parent to child terminal component. Also need to nerf a bunch of redundant styling consts that made sense before i forked it but now can be handled directly.

### `LP Page`

Coming soon. Pull down data from Eth RPC, organize, display. 

### `Protocol Page`

Gather user submitted protocols and display. 

### `Routing and Pages`

Will write later

