import '../App.css';
import Terminal from '../Components/Terminal.js';
import WhiteList from '../Components/whitelist.js'
import SubmitProtocol from '../Components/SubmitProtocol.js'
import OpenMegastructures from '../Components/OpenMegastructures.js'
import Donate from '../Components/Donate.js'
import OpenLPAlpha from '../Components/OpenLPAlpha.js'
import Container from '@mui/material/Container';
//import mmlogo from './Components/metamask-fox.svg'
import React, { useState } from 'react';

// TODO: stop being lazy and make all conditional components one thing


const styles = {
    header : {padding: '0px 0px 0',},
    prefix : {color: '#57d51f',},
    redCircle : {backgroundColor: '#000',},
    greenCircle : {backgroundColor: '#000',},
    yellowCircle : {backgroundColor: '#000',},
};

const initialHistory = [
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
        '.wen_token_ser': { content: 'submit some protocols and maybe you will get lucky' },
        '.hyperstructures': { content: 'Access Granted: 8 25 16 5 18 19 20 18 21 3 20 21 18 5 19' },
        '.origins': { content: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' },
        '.builtBy': { content: 'alexlegault.eth' },


    },
    protocolList: {
        JetProtocol: { content: 'a decentralized protocol for borrowing and lending on the Solana Blockchain' },
        Oxsplits: { content: '0xSplits is an open-source, audited, and non-upgradeable protocol for efficiently splitting onchain income. Whenever a Split receives funds, each recipient gets their share. Simple enough for friends, secure enough for anons.' },
        Syndicate: { content: 'Syndicate is revolutionizing investing by changing how communities and capital work together through accessible, effortless, and social web3 technologies.' },
    },
    'submitProtocol.exe': { content: 'Access Granted: 19 21 2 13 9 20' },
    liquidityProviderAlpha: { content: '$$$$$$$$' },
    'README.md': { content: 'protocol-farm helps new protocols get discovered to ensure that WAGMI. Sign up on the whitelist to get early access. Submit a protocol to get points. Points will have value later. ' },
     'whiteList.exe': { content: 'Access Granted: 3 12 15 23 14'},
      'supportThisProject.exe': { content: 'Access Granted: 4 15 14 1 20 5'},
};

const extensions = {
    sudo: {
        exec: ({ structure, history, cwd }) => {
            return { structure, cwd,
                history: history.concat({ value: 'FATAL ERROR: Satoshi not found. Exit Code: 128+n' }),
            };
        },
    },
};

function Home() {
const [history, setHistory] = useState(initialHistory);

  return (
        <div className="App">
      <header className="App-header">
      <Donate history={history} />
      <Container maxWidth="sm" sx={{ maxHeight: '75%' }}>
        <Terminal
            styles={styles}
            history={history}
            extensions={extensions}
            structure={structure}
            theme='dark'
            prefix='hacker@1A1zP1'
            setHistory={setHistory}
         />
        </Container>
        <WhiteList history={history} />
        <SubmitProtocol history={history} />
        <OpenMegastructures history={history} />
        <OpenLPAlpha history={history} />

</header>
    </div>

  );
}

export default Home;
