import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import axios, { put } from 'axios';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import GoogleMaps from './GoogleMaps';
import moment from 'moment';

export default class UpdateEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: this.props.currentuser,
          event: this.props.currentevent,
          user_id: this.props.currentuser.id,
          eventname: this.props.currentevent.eventname,
          eventdescription: this.props.currentevent.eventdescription,
          eventlocation: this.props.currentevent.eventlocation,
          eventstartdate: this.props.currentevent.eventstartdate,
          eventenddate: this.props.currentevent.eventenddate,
          eventstarttime: this.props.currentevent.eventstarttime,
          eventendtime: this.props.currentevent.eventendtime,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
      }

      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
    
      }
      handleSubmit(e) {
        e.preventDefault();
        this.updateEvent({
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
    updateEvent(values) {
        let id = this.state.event.id;
        const url = 'http://localhost:8000/api/events/';
        return put(url + id, values)
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
                value={moment(this.state.event.eventstartdate).format('YYYY-MM-DD')}
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
                value={moment(this.state.event.eventenddate).format('YYYY-MM-DD')}
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
                value={moment(this.state.event.eventstarttime).format('HH:mm')}
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
                value={moment(this.state.event.eventendtime).format('HH:mm')}
                onChange={this.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}

              />
            </Grid>

          </Grid>
        </MuiPickersUtilsProvider>
      <Button variant="contained" color="primary" type="submit">
          Update
      </Button>
      </form>
        )
    }
}




