import './App.css';
//import 'terminal-in-react/lib/css/index.css';
import Terminal from 'react-bash';
import mmlogo from './Components/metamask-fox.svg'
import * as React from 'react';
import Button from '@mui/material/Button';




function App() {

const extensions = {
    sudo: {
        exec: ({ structure, history, cwd }) => {
            return { structure, cwd,
                history: history.concat({ value: 'ERROR: Satoshi not found' }),
            };
        },
    },
};

const history = [
    { value: 'Connecting to the blockchain' },
    { value: '.....' },
    { value: '.....' },
    { value: 'Success.' },
    { value: '    ' },
    { value: 'Submit your protocol, user.' },
    { value: 'Type `help` to begin' },
];

const structure = {
    '.hidden': {
        GorillaDEX: { content: 'The is the content for file1 in the <.hidden> directory.' },
        ClownCoin: { content: 'CLWN is a stableclown that randomly changes its value every 10 minutes' },
        dir2: {
            file: { content: ' http://oncyber.io/schrutefarms' },
        },
        '.secrets': { content: 'Clownana' },
    },
    public: {
        JetProtocol: { content: 'a decentralized protocol for borrowing and lending on the Solana Blockchain' },
        Oxsplits: { content: '0xSplits is an open-source, audited, and non-upgradeable protocol for efficiently splitting onchain income. Whenever a Split receives funds, each recipient gets their share. Simple enough for friends, secure enough for anons.' },
        Syndicate: { content: 'Syndicate is revolutionizing investing by changing how communities and capital work together through accessible, effortless, and social web3 technologies.' },
    },
    'README.md': { content: 'protocol-farm helps new protocols get discovered to ensure that WAGMI. Sign up below to get early access. Submit your protocol to be featured if you can figure out how....' },
};

  return (



    <div className="App">

      <header className="App-header">




        <Terminal history={history} extensions={extensions} structure={structure} />
        <p>
         Coming Soon.
        </p>
        <a
          className="App-link"
          href="https://forms.gle/k8L4k7EG5T7Q7sG2A"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whitelist
        </a>
      </header>
    </div>
  );
}

export default App;
