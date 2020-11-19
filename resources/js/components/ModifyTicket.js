import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import './style.scss';
import TicketImageUpload from './TicketImageUpload';

export default function ModifyTicket() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} >
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Modify Ticket</DialogTitle>
        <DialogContent>
        <form >
        < Grid container spacing={3} className="griditem">
          <Grid item xs={4}>
            <TextField id="ticketname" label="Ticket's name" />
          </Grid>

          <Grid item xs={4}>
            <TextField id="ticketsquantity" label="Quantity" />
          </Grid>

          <Grid item xs={4}>
            <TextField id="ticketprice" label="Price" />
          </Grid>
        </Grid>
        < Grid container spacing={3} className="griditem">
          <Grid item xs={4}>
            <TextField type='date' id="ticketstartdate" label='Start date'
              InputLabelProps={{
                shrink: true,
              }} />
          </Grid>

          <Grid item xs={4}>
            <TextField type='date' id="ticketenddate" label='End date'
              InputLabelProps={{
                shrink: true,
              }} />
          </Grid>
        </Grid>
        < Grid container spacing={3} className="griditem">
          <Grid item xs={4}>
            <TextField type='time' id="ticketstarttime" label='Start time'
              InputLabelProps={{
                shrink: true,
              }} />
          </Grid>

          <Grid item xs={4}>
            <TextField type='time' id="ticketendtime" label='End time'
              InputLabelProps={{
                shrink: true,
              }} />
          </Grid>


          <Grid item xs={12}>
            <TicketImageUpload />
          </Grid>
        </Grid>
      </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}