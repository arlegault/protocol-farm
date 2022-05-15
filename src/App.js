import './App.css';
import Terminal from 'react-bash';
import WhiteList from './Components/whitelist.js'
import Container from '@mui/material/Container';
//import mmlogo from './Components/metamask-fox.svg'
import * as React from 'react';


function App() {

const extensions = {
    sudo: {
        exec: ({ structure, history, cwd }) => {
            return { structure, cwd,
                history: history.concat({ value: 'FATAL ERROR: Satoshi not found. Exit Code: 128+n' }),
            };
        },
    },
};

const styles = {
    header : {padding: '0px 0px 0',},
    prefix : {color: '#57d51f',},
    redCircle : {backgroundColor: '#000',},
    greenCircle : {backgroundColor: '#000',},
    yellowCircle : {backgroundColor: '#000',},
};

const history = [
    { value: 'Connecting to 0x321162Cd933E2Be498Cd2267a90534A804051b11' },
    { value: '.....' },
    { value: '.....' },
    { value: 'Success. Initializing protocol farm' },
    { value: '.....' },
    { value: 'Protocol Map Incomplete! Exit code 126' },
    { value: '.' },
    { value: 'Submit protocol to recover' },
];

const structure = {
    '.hidden': {
        GorillaDEX: { content: '.' },
        ClownCoin: { content: 'CLWN is a stableclown that randomly changes its value every 10 minutes' },
        dir2: {
            file: { content:'http://oncyber.io/schrutefarms' },
        },
        '.secrets': { content: 'Clownana' },
        '.origins': { content: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' },
        '.submit': { content: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' },
    },
    protocols: {
        JetProtocol: { content: 'a decentralized protocol for borrowing and lending on the Solana Blockchain' },
        Oxsplits: { content: '0xSplits is an open-source, audited, and non-upgradeable protocol for efficiently splitting onchain income. Whenever a Split receives funds, each recipient gets their share. Simple enough for friends, secure enough for anons.' },
        Syndicate: { content: 'Syndicate is revolutionizing investing by changing how communities and capital work together through accessible, effortless, and social web3 technologies.' },
    },
    topLiquidityProviders: {
        comingSoon: { content: '$$$$' },
    },
    'README.md': { content: 'protocol-farm helps new protocols get discovered to ensure that WAGMI. Sign up on the whitelist to get early access. Submit your protocol to be featured if you can figure out how....' },
     'Whitelist.md': { content: 'Access Granted: 3 12 15 23 14'},
};

//console.log(this.state)

  return (

    <div className="App">
      <header className="App-header">
        <div></div>
      <Container maxWidth="sm" sx={{ maxHeight: '75%' }}>
        <Terminal styles={styles} history={history} extensions={extensions} structure={structure} theme= 'dark' prefix= 'hacker@1A1zP1' />
        </Container>
        <WhiteList history={history} />

      </header>
    </div>
  );
}

export default App;
