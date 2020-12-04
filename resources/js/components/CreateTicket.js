import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import GoogleMaps from './GoogleMaps';
import Date from './Date';
import BasicTextField from './TextField';
import './style.scss';
import TicketImageUpload from './TicketImageUpload';
import axios, { post } from 'axios';
class CreateTicket extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ticketname: '',
      ticketquantity: '',
      ticketprice: '',
      ticketimage: '',
      ticketstartdate: '2020-09-30',
      ticketenddate: '2020-09-30',
      ticketstarttime: '07:30',
      ticketendtime: '07:30'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createTicket = this.createTicket.bind(this);
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
      ticketname: this.state.ticketname,
      ticketquantity: this.state.ticketquantity,
      ticketprice: this.state.ticketprice,
      ticketimage: this.state.ticketimage,
      ticketstartdate: this.state.ticketstartdate,
      ticketenddate: this.state.ticketenddate,
      ticketstarttime: this.state.ticketstarttime,
      ticketendtime: this.state.ticketendtime
    });
  }
  createTicket(values) {
    console.log(values);
    const url = 'http://localhost:8000/api/tickets';
    return post(url, values)
      .then(response => console.log(response))
    // .then(response => this.setState({eventname:response.data}))
  }


  render() {

    return (

      <form onSubmit={this.handleSubmit} >
        < Grid container spacing={3} className="griditem">
          <Grid item xs={4}>
            <TextField id="ticketname" name="ticketname" label="Ticket's name" value={this.state.ticketname} onChange={this.handleChange}/>
          </Grid>

          <Grid item xs={4}>
            <TextField id="ticketquantity" name="ticketquantity" label="Quantity" value={this.state.ticketquantity} onChange={this.handleChange}/>
          </Grid>

          <Grid item xs={4}>
            <TextField id="ticketprice" name="ticketprice" label="Price" value={this.state.ticketprice} onChange={this.handleChange}/>
          </Grid>
        </Grid>
        < Grid container spacing={3} className="griditem">
          <Grid item xs={4}>
            <TextField type='date' id="ticketstartdate" name="ticketstartdate" label='Start date' value={this.state.ticketstartdate} onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
              }} />
          </Grid>

          <Grid item xs={4}>
            <TextField type='date' id="ticketenddate" name="ticketenddate" label='End date' value={this.state.ticketenddate} onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
              }} />
          </Grid>
        </Grid>
        < Grid container spacing={3} className="griditem">
          <Grid item xs={4}>
            <TextField type='time' id="ticketstarttime" name="ticketstarttime" label='Start time' value={this.state.ticketstarttime} onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
              }} />
          </Grid>

          <Grid item xs={4}>
            <TextField type='time' id="ticketendtime" name="ticketendtime" label='End time' value={this.state.ticketendtime} onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
              }} />
          </Grid>

          <Grid item xs={12}>
            <TicketImageUpload name="ticketimage" value={this.state.ticketimage} onChange={this.handleChange}/>
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