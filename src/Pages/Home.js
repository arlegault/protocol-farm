import '../App.css';
import Terminal from '../Components/Terminal/Terminal.js';
import WhiteList from '../Components/TriggeredFromTerminalHistory/WhiteList.js'
import Donate from '../Components/TriggeredFromTerminalHistory/Donate.js'
import OpenLinksFromTerminalHistory from '../Components/TriggeredFromTerminalHistory/OpenLinksFromTerminalHistory.js'
import Container from '@mui/material/Container';
import React, { useState } from 'react';

// TODO: stop being lazy and make all conditional components one thing


const initialHistory = [
    { value: 'Last login: Sat Jan 3 2009 18:15:05'},
    { value: 'Connecting to 0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f' },
    { value: '.....' },
    { value: '.....' },
    { value: 'Success. Initializing protocol farm.' },
    { value: '.....' },
    { value: 'ERR Protocol Map Incomplete! Must index all protocols.' },
    { value: '.....' },
    { value: 'Type help to begin' },
];

const structure = {
    '.hiddenDir': {
        GorillaDEX: { content: '.' },
        ClownCoin: { content: 'CLWN is a stableclown that randomly changes its value every 10 minutes' },
        '.secrets': { content: 'Clownana' },
        '.wen_token_ser': { content: 'submit some protocols and maybe you will get lucky' },
        '.hyperstructures': { content: 'Access Granted: 8 25 16 5 18 19 20 18 21 3 20 21 18 5 19' },
        '.origins': { content: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' },
        '.builtBy': { content: 'alexlegault.eth' },


    },
    'protocols.sh': { content: '01101011 01100101 01111001'},
    'submitProtocol.sh': { content: 'Access Granted: 19 21 2 13 9 20' },
    'liquidityProvider.sh': { content: '$$$$$$$$' },
    'README.md': { content: 'protocol-farm helps new protocols get discovered to ensure that WAGMI. Sign up on the whitelist to get early access. Submit a protocol to get points. Points will have value later. ' },
    'supportThisProject.sol': { content: 'Access Granted: 4 15 14 1 20 5'},
    'whiteList.sh': { content: 'Access Granted: 3 12 15 23 14'},
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
      <Container maxWidth="md" sx={{ maxHeight: '75%' }}>
        <Terminal
            history={history}
            extensions={extensions}
            structure={structure}
            setHistory={setHistory}
         />
        </Container>
        <WhiteList history={history} />
        <OpenLinksFromTerminalHistory history={history} />
</header>
    </div>

  );
}

export default Home;
