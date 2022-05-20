import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  background: '#000',
  textAlign: 'center',
}));


export default function ProtocolListItem(props) {
console.log(props.protocols.name)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container wrap='nowrap' spacing={2} columns={16}>

        <Grid item xs={3}>
          <Item>{props.protocols.name}</Item>
        </Grid>

        <Grid item xs={12}>
          <Item>{props.protocols.desc}</Item>
        </Grid>

         <Grid item xs={3}>
          <Item>
          <a href={props.protocols.link}>{props.protocols.url}</a>
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}