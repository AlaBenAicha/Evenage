import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import axios, { post, put } from 'axios';

export default class ArchiveTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
          event_id: this.props.ticketToArchive.event_id,
          id: this.props.ticketToArchive.id,
          ticket: {
          ticketname: this.props.ticketToArchive.ticketname,
          ticketquantity: this.props.ticketToArchive.ticketquantity,
          ticketprice: this.props.ticketToArchive.ticketprice,
          ticketimage: this.props.ticketToArchive.ticketimage,
        }
        
        };
    
        this.archiveTicket = this.archiveTicket.bind(this);
        this.deleteOldTicket = this.deleteOldTicket.bind(this);
      }

      archiveTicket() {
          let ticket = this.state.ticket;
        const url = 'http://localhost:8000/api/archivedtickets';
        return axios.post(url, ticket).then(response => { 
        this.deleteOldTicket(response.data.id);
      });
        
    }
    deleteOldTicket(id) {
      console.log(id);
      axios.delete('http://localhost:8000/api/tickets/' + id).then((response)=> {
      console.log('old ticket deleted');
      });
      }

    render() {
        return (
            
            <Button onClick={this.archiveTicket} variant="outlined" color="secondary" type="submit">
              Archive
            </Button>
        )
    }
}
