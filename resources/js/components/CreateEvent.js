import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import axios, { post, put } from 'axios';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import GoogleMaps from './GoogleMaps';
import Date from './Date';
import BasicTextField from './TextField';

export default class CreateEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          currentuser: this.props.currentuser,
          user_id: this.props.currentuser.id,
          eventname: '',
          eventdescription: '',
          eventlocation: '',
          eventstartdate: '2020-09-30',
          eventenddate: '2020-09-30',
          eventstarttime: '07:30',
          eventendtime: '07:30',
          eventcreated: false,
          events: [],
          event_id: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createEvent = this.createEvent.bind(this);
      }

      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
    
      }
     
      handleSubmit(e) {
        e.preventDefault();
        this.state.eventcreated = true;
        this.createEvent({
          user_id: this.state.user_id,
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
        const url = 'http://localhost:8000/api/events';
        return post(url, values)
          .then(response => console.log(response))
      }

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

          </Grid>
        </MuiPickersUtilsProvider>
      <Button variant="contained" color="primary" type="submit">
          Save
      </Button>
      </form>
        )
    }
}



