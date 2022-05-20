import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ProtocolListItem from './ProtocolListItem.js'

//create some function to map out all protocols. create a bunch of item and protocol list based on available info

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const protocols = [
        {
            name: 'Jet Protocol',
            desc: 'a decentralized protocol for borrowing and lending on the Solana Blockchain',
            link: "https://www.jetprotocol.io/",
            url: 'www.jetprotocol.io',
        },
         {
            name: 'Syndicate',
            desc: 'Transform any wallet into a powerful web3 investment club',
            link: "https://syndicate.io/",
            url: 'www.syndicate.io',
        },
        {
            name: '0xSplits',
            desc: '0xSplits is an open-source, audited, and non-upgradeable protocol for efficiently splitting onchain income.',
            link: "https://www.0xsplits.xyz/",
            url: 'www.0xsplits.xyz',
        },
        ];

export default function ProtocolCardList() {


  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
      {protocols.map(function(protocol, index){
            return <Item key={index}> <ProtocolListItem protocols={protocol}/></Item>;
            })}
      </Stack>
    </Box>
  );
}