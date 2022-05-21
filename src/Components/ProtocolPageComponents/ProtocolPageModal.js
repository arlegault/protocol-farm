import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LaunchIcon from '@mui/icons-material/Launch';
import Grid from '@mui/material/Grid';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: '#FFB000',
};
//TODO: redirect to eth or sol scan depending on contract address. visit protocol website button. Styling.

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
console.log(props.modalInfo)
    if (props.modalInfo.wen_token === '' ){
    props.modalInfo.wen_token =  "¯\\_(ツ)_/¯"
    }
  return (
    <div>
      <Button onClick={handleOpen}>View</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {props.modalInfo.protocol_name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.modalInfo.long_description}
          </Typography>
           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Contract Created Date: {props.modalInfo.first_contract_created_date}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Contract Interactions: {props.modalInfo.contract_interactions}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Whitepaper/Docs: {props.modalInfo.whitepaper_link}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Discord: {props.modalInfo.discord}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Twitter: {props.modalInfo.twitter}
          </Typography>
           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Founder(s): {props.modalInfo.founders}
          </Typography>
            </Grid>
            <Grid item xs={10}>
           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Wen Token: {props.modalInfo.wen_token}
          </Typography>
          </Grid>
           <Grid item xs={1}>
           <Button variant="contained" href={props.modalInfo.url} endIcon={<LaunchIcon />}>
        Visit
      </Button>
       </Grid>
        </Grid>
        </Box>
      </Modal>
    </div>
  );
}