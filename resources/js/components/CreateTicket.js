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
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';

class CreateTicket extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.currentuser,
      user_id: this.props.currentuser.id,
      currentevent: '',
      events: [],
      event_id: '',
      ticketname: '',
      ticketquantity: '',
      ticketprice: '',
      ticketimage: '',
      ticketstartdate: '2020-09-30',
      ticketenddate: '2020-09-30',
      ticketstarttime: '07:30',
      ticketendtime: '07:30',
      ticketimageuploaded: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createTicket = this.createTicket.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getEvent = this.getEvent.bind(this);
  }
  componentDidMount(){
    axios.get('http://localhost:8000/api/events').then((response) => {
            this.setState({
              events: response.data
            })
            this.getEvent(this.state.events);
            
            
  })
}
getEvent(events){
  events.map((event) => {
    if (event.user_id == this.state.user_id) {
      
      this.setState({
        currentevent : event,
        eventcreated : true,
        
      });
    } })}

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.createTicket({
      event_id: this.state.currentevent.id,
      ticketname: this.state.ticketname,
      ticketquantity: this.state.ticketquantity,
      ticketprice: this.state.ticketprice,
      ticketimage: this.state.ticketimage,
      ticketstartdate: this.state.ticketstartdate,
      ticketenddate: this.state.ticketenddate,
      ticketstarttime: this.state.ticketstarttime,
      ticketendtime: this.state.ticketendtime,
    });
  }
  createTicket(values) {
    console.log(values);
    const url = 'http://localhost:8000/api/tickets';
    return post(url, values)
      .then(response => console.log(response))
  }
  onChange(e) {
  
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length)
      return;
      this.createImage(files[0]);
      this.setState({ ticketimageuploaded: true });
     
    
  }
  createImage(file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({
        ticketimage: e.target.result
      })
    };
    reader.readAsDataURL(file);
  }

  render() {
    const ticketimageuploaded = this.state.ticketimageuploaded;
    let coverimage;

    if (ticketimageuploaded) {
      coverimage = <img style={{ width: 800, height: 200 }} src={this.state.ticketimage} />;
    } else {
      coverimage = <Skeleton variant="rect" width={800} height={200} />;
    }
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
          
           
             <TicketImageUpload name="ticketimage" image={this.state.ticketimage} onChange={this.handleChange}/> 
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