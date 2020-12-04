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
import axios, { post, put } from 'axios';

export default class ModifyTicket extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.ticketToEdit.id,
      ticketname: this.props.ticketToEdit.ticketname,
      ticketquantity: this.props.ticketToEdit.ticketquantity,
      ticketprice: this.props.ticketToEdit.ticketprice,
      ticketimage: this.props.ticketToEdit.ticketimage,
      ticketstartdate: this.props.ticketToEdit.ticketstartdate,
      ticketenddate: this.props.ticketToEdit.ticketenddate,
      ticketstarttime: this.props.ticketToEdit.ticketstarttime,
      ticketendtime: this.props.ticketToEdit.ticketendtime,
      setOpen: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateTicket = this.updateTicket.bind(this);
  }



   updateTicket () {
let id = this.state.id;
    axios.put('http://localhost:8000/api/tickets/' + id, {
      ticketname: this.state.ticketname,
      ticketquantity: this.state.ticketquantity,
      ticketprice: this.state.ticketprice,
      ticketstartdate: this.state.ticketstartdate,
      ticketenddate: this.state.ticketenddate,
      ticketstarttime: this.state.ticketstarttime,
      ticketendtime: this.state.ticketendtime
    }).then((response) => {

      console.log(response);

      })
  };

   handleClickOpen () {
    this.setState( {setOpen: true} ) ;
    // this.handleEdit();
  }

   handleClose () {
    this.setState( {setOpen: false} ) ;
  }

  handleChange(e) {
    this.setState({
      // [e.target.name]: e.target.value
      [e.target.name]: e.target.value,
    });
  }

render () {
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen} >
        Edit
      </Button>
      <Dialog open={this.state.setOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Modify Ticket</DialogTitle>
        <DialogContent>
          <form >
            < Grid container spacing={3} className="griditem">
              <Grid item xs={4}>
                <TextField id="ticketname" name="ticketname"  value={this.state.ticketname} onChange={this.handleChange} label="Ticket's name" />
              </Grid>

              <Grid item xs={4}>
                <TextField id="ticketquantity" name="ticketquantity"  value={this.state.ticketquantity} onChange={this.handleChange} label="Quantity" />
              </Grid>

              <Grid item xs={4}>
                <TextField id="ticketprice"  name="ticketprice"  value={this.state.ticketprice} onChange={this.handleChange} label="Price" />
              </Grid>
            </Grid>
            < Grid container spacing={3} className="griditem">
              <Grid item xs={4}>
                <TextField type='date' id="ticketstartdate"  name="ticketstartdate"  value={this.state.ticketstartdate} onChange={this.handleChange} label='Start date'
                  InputLabelProps={{
                    shrink: true,
                  }} />
              </Grid>

              <Grid item xs={4}>
                <TextField type='date' id="ticketenddate" name="ticketenddate"  value={this.state.ticketenddate} onChange={this.handleChange} label='End date'
                  InputLabelProps={{
                    shrink: true,
                  }} />
              </Grid>
            </Grid>
            < Grid container spacing={3} className="griditem">
              <Grid item xs={4}>
                <TextField type='time' id="ticketstarttime" name="ticketstarttime"  value={this.state.ticketstarttime} onChange={this.handleChange} label='Start time'
                  InputLabelProps={{
                    shrink: true,
                  }} />
              </Grid>

              <Grid item xs={4}>
                <TextField type='time' id="ticketendtime" name="ticketendtime"  value={this.state.ticketendtime} onChange={this.handleChange} label='End time'
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
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          
          <Button color="primary" onClick={this.updateTicket}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}