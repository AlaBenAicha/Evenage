import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import GoogleMaps from './GoogleMaps';
import Date from './Date';
import BasicTextField from './TextField';
import Button from '@material-ui/core/Button';
import axios, { post } from 'axios';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles"
import './style.scss';

// const styles = theme => ({
//   griditem: {
//     padding: 25 
//   }
// });
class Details extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      eventname: '',
      eventdescription: '',
      eventlocation: '',
      eventstartdate: '2020-09-30',
      eventenddate: '2020-09-30',
      eventstarttime: '07:30',
      eventendtime: '07:30'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.handleEventStartDateChange = this.handleEventStartDateChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      // [e.target.name]: e.target.value
      [e.target.name]: e.target.value,
      // eventlocation: e.target.value,
      // eventstartdate: e.target.value,
      // eventenddate: e.target.value,
      // eventstarttime: e.target.value,
      // eventendtime: e.target.value
    });
    // let nam = e.target.name;
    // let val = e.target.value;
    // this.setState({[nam]: val});
  }
  handleEventStartDateChange(e) {
    this.setState({
      eventstartdate: e.target.value,
    })
  }
  handleSubmit(e) {
    // alert('Values were submitted: ' + this.state);
    e.preventDefault();
    this.createEvent({
      eventname: this.state.eventname,
      eventdescription: this.state.eventdescription,
      eventlocation: this.state.eventlocation,
      eventstartdate: this.state.eventstartdate,
      eventenddate: this.state.eventenddate,
      eventstarttime: this.state.eventstarttime,
      eventendtime: this.state.eventendtime
    });
  }
  createEvent(values) {
    console.log(values);
    const url = 'http://localhost:8000/api/events';
    return post(url, values)
      .then(response => console.log(response))
    // .then(response => this.setState({eventname:response.data}))
  }
  //   const [values, setValues] = useState({
  //  eventname: '',
  //  eventlocation: '',
  //  eventstartdate: '',
  //  eventenddate: '',
  //  eventstarttime: '',
  //  eventendtime: ''
  // })
  //   const  onFormSubmit= values => {
  //       const url = 'http://localhost:8000/api/events';
  //       values.preventDefault() ;
  //       setValues(values.target.value);
  //       return  post(url, values)
  //               .then(response => console.log(response))
  //     }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        <Grid container spacing={3} className="griditem">
        <Grid item xs={4}>
        <TextField name="eventname" id="ename" label="Event name" value={this.state.eventname} onChange={this.handleChange} />
        </Grid>
        <Grid item xs={4}>
        <TextField name="eventdescription" id="edesc" label="Event description" value={this.state.eventdescription} onChange={this.handleChange} />
        </Grid>
        <Grid item xs={4}>
        <TextField name="eventlocation" id="elocation" label="Event location" value={this.state.eventlocation} onChange={this.handleChange} />
        </Grid>
        </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container spacing={3} className="griditem">
          <Grid item xs={4}>
            <TextField
              id="date"
              name="eventstartdate"
              value={this.state.eventstartdate}
              label="Start date"
              type="date"
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            <Grid item xs={4}>
            <TextField
              id="date"
              name="eventenddate"
              value={this.state.eventenddate}
              label="End date"
              type="date"
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            {/* <KeyboardDatePicker
        name="startdate"
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="startdate"
          label="Start Date"
          value={this.eventstartdate}
          onChange={this.handleChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> */}

            {/* <KeyboardDatePicker
          name="enddate"
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="enddate"
          label="End Date"
          value={this.eventenddate}
          onChange={this.handleChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> */}
          </Grid>
          < Grid container spacing={3} className="griditem">
          <Grid item xs={4}>
            <TextField
              id="time1"
              name="eventstarttime"
              label="Start time"
              type="time"
              defaultValue="07:30"
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
              }}

            />
            </Grid>
            <Grid item xs={4}>
            <TextField
              id="time2"
              name="eventendtime"
              label="End time"
              type="time"
              defaultValue="07:30"
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
              }}

            />
            </Grid>
            {/* <KeyboardTimePicker
        name="starttime"
          margin="normal"
          id="starttime"
          label="Start Time"
          value={this.eventstarttime}
          onChange={this.handleChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <KeyboardTimePicker
        name="endtime"
          margin="normal"
          id="endtime"
          label="End Time"
          value={this.eventendtime}
          onChange={this.handleChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        /> */}
          </Grid>
        </MuiPickersUtilsProvider>

        <Button variant="contained" color="primary" type="submit">
          Save
      </Button>
      </form>

    )
  }
}
export default Details;