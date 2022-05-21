import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ProtocolListItem from './ProtocolListItem.js'
import Papa from 'papaparse'
import { useState }  from 'react'


//create some function to map out all protocols. create a bunch of item and protocol list based on available info
function ProtocolCardList() {

const [protocolcsvdata, setProtocolcsvdata] = useState([]);

React.useEffect(() => {
    Papa.parse("protocolData.csv", {
        download: true,
        header: true,
        complete: data => {
            setProtocolcsvdata(data.data);
        }
    });
}, []);

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  background: '#1B1A1A',
}));

console.log(protocolcsvdata[0])

  return (

    <Box sx={{ width: '100%' }}>
    <Stack spacing={2}>
      {protocolcsvdata.map(function(protocol, index){
            return <Item key={index}> <ProtocolListItem protocols={protocol}/></Item>;
            })}
      </Stack>
    </Box>
)}
export default ProtocolCardList
