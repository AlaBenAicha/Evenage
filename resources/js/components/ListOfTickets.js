import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './style.scss';
import ModifyTicket from './ModifyTicket';
import ArchiveTicket from './ArchiveTicket';
import axios from 'axios';

class ListOfTickets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets:[],
        };

        this.archiveTicket = this.archiveTicket.bind(this);
        this.createData = this.createData.bind(this);
    }

    createData(ticket, sold, available) {
        return { ticket, sold, available };
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/tickets').then((response) => {
            this.setState({
                tickets: response.data
            })
        });
    }
    archiveTicket(ticket) {
        const url = 'http://localhost:8000/api/archivedtickets';
        return axios.post(url, ticket)
        .then(response => console.log(response))
    }

    handleEdit(ticket) {
        debugger;
    }
    render() {


        return (

            <TableContainer component={'span'}>
                <Table aria-label="simple table" component={'span'}>
                    <TableHead component={'span'}>
                        <TableRow component={'span'}>
                            <TableCell component={'span'}>Ticket</TableCell>
                            <TableCell component={'span'} align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody component={'span'}>
                        {this.state.tickets.map((ticket) => (
                            <TableRow key={ticket.ticketname} component={'span'}>
                                <TableCell component={'span'} scope="row">
                                    {ticket.ticketname}
                                </TableCell>
                                <TableCell align="right" padding='default' component={'span'}>
                                    <ModifyTicket variant="contained" ticketToEdit={ticket} component={'span'}/>
                                    <ArchiveTicket variant="contained" ticketToArchive={ticket} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        );
    }
}
export default ListOfTickets;