import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicModal from './ProtocolPageModal.js'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  background: '#000',
  textAlign: 'center',
}));

//TODO: update this to just use the protocol shape and a style template to create each grid item
//TODO: make text smaller for description
//TODO: make viewing modal less bad
export default function ProtocolListItem(props) {
console.log(props.protocols['protocol_name'])

  return (
    <Box sx={{ flexGrow: 1 }}>
    {props.protocols.protocol_name === undefined ? (
    <>Loading...</>
    ):(
      <Grid container wrap='nowrap' spacing={2} columns={16}>

        <Grid item xs={2}>
          <Item>{props.protocols.protocol_name}</Item>
        </Grid>

        <Grid item xs={13}>
          <Item>{props.protocols.short_description}</Item>
        </Grid>

        <Grid item xs={1}>
          <Item><BasicModal modalInfo={props.protocols}/></Item>
        </Grid>

      </Grid>
      )}
    </Box>
  );
}