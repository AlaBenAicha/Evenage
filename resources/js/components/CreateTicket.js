import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import GoogleMaps from './GoogleMaps';
import Date from './Date';
import BasicTextField from './TextField';
import './style.scss';
import TicketImageUpload from './TicketImageUpload';
class CreateTicket extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tickettname: 'a',
      ticketsquantity: '',
      ticketprice: '',
      ticket_image_url: '',
      ticketstartdate: '2020-09-30',
      ticketenddate: '2020-09-30',
      ticketstarttime: '07:30',
      ticketendtime: '07:30'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      // [e.target.name]: e.target.value
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    // alert('Values were submitted: ' + this.state);
    e.preventDefault();
    this.createTicket({
      tickettname: this.state.tickettname,
      ticketsquantity: this.state.ticketsquantity,
      ticketprice: this.state.ticketprice,
      ticket_image_url: this.state.ticket_image_url,
      ticketstartdate: this.state.ticketstartdate,
      ticketenddate: this.state.ticketenddate,
      ticketstarttime: this.state.ticketstarttime,
      ticketendtime: this.state.ticketendtime
    });
  }



  render() {

    return (

      <form onSubmit={this.handleSubmit} >
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
          <Grid item xs={4}>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>

    )
  }
}
export default CreateTicket;