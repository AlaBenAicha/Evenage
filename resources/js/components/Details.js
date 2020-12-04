import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import GoogleMaps from './GoogleMaps';
import Date from './Date';
import BasicTextField from './TextField';
import CreateEvent from './CreateEvent';
import UpdateEvent from './UpdateEvent';
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
import { withStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles"
import './style.scss';
import { useAuth } from '../context/auth';

class Details extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.currentuser,
      user_id: this.props.currentuser.id,
      currentevent: '',
      events: [],
      eventcreated: false,
      form: '',
    };
    this.getEvent = this.getEvent.bind(this);
  }

  getEvent(events){
    events.map((event) => {
      if (event.user_id == this.state.user_id) {
        
        this.setState({
          currentevent : event,
          eventcreated : true,
          form: <UpdateEvent currentuser={this.state.user} currentevent={event}/>,
        })
      } else {
        this.setState({
        form : <CreateEvent currentuser={this.state.user}/>
      })
      }
      console.log(event.user_id);
      console.log(this.state.user_id);
      console.log(this.state.eventcreated);
      // if (this.state.eventcreated = false) {
      //   // this.setState({form : <UpdateEvent currentuser={this.state.user} currentevent={this.state.currentevent}/>});
      //   // } else {
      //   this.setState({
      //   form : <CreateEvent currentuser={this.state.user}/>
      //   });
          
      //   }
    })
  }

    componentDidMount(){
    axios.get('http://localhost:8000/api/events').then((response) => {
            this.setState({
              events: response.data
            })
            console.log(this.state.eventcreated);
            this.getEvent(this.state.events);
            
            
  })
}
  

  render() {
    let form = this.state.form;
    
    return (

      <div>
      {form}
      </div>
    )
  }
}
export default Details;