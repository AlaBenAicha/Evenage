import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import axios, { post, put } from 'axios';

export default class ArchiveTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.ticketToArchive.id,
          ticketname: this.props.ticketToArchive.ticketname,
          ticketquantity: this.props.ticketToArchive.ticketquantity,
          ticketprice: this.props.ticketToArchive.ticketprice,
          ticketimage: this.props.ticketToArchive.ticketimage,
          ticketstartdate: this.props.ticketToArchive.ticketstartdate,
          ticketenddate: this.props.ticketToArchive.ticketenddate,
          ticketstarttime: this.props.ticketToArchive.ticketstarttime,
          ticketendtime: this.props.ticketToArchive.ticketendtime,
        };
    
        this.archiveTicket = this.archiveTicket.bind(this);
        this.deleteOldTicket = this.deleteOldTicket.bind(this);
      }

      archiveTicket() {
          let ticket = this.props.ticketToArchive;
        const url = 'http://localhost:8000/api/archivedtickets';
        return axios.post(url, ticket).then(response => { 
        console.log(response);
        this.deleteOldTicket(ticket.id);
      });
        
    }
    deleteOldTicket(id) {
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
