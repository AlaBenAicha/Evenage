import React from 'react';
import CreateEvent from './CreateEvent';
import UpdateEvent from './UpdateEvent';
import axios from 'axios';

import './style.scss';

class Details extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.currentuser,
      user_id: this.props.currentuser.id,
      currentevent: '',
      events: [],
      eventcreated: false,
      form: <CreateEvent currentuser={this.props.currentuser}/>,
    };
    this.getEvent = this.getEvent.bind(this);
  }

  getEvent(events){
    this.setState({
      form : <CreateEvent currentuser={this.state.user}/>
    })
    events.map((event) => {
      if (event.user_id == this.state.user_id) {
        return(
        this.setState({
          currentevent : event,
          eventcreated : true,
          form: <UpdateEvent currentuser={this.state.user} currentevent={event}/>,
          
        })
        );
      } 
    })
  }

    componentDidMount(){
    axios.get('http://localhost:8000/api/events').then((response) => {
            this.setState({
              events: response.data
            })
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