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
import axios from 'axios';




class ArchivedTickets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            archivedtickets: []
        };
    }

   
    componentWillMount() {
        axios.get('http://localhost:8000/api/archivedtickets').then((response) => {
            this.setState({
                archivedtickets: response.data
            })
        });
    }
    
    
    render() {


        return (

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Ticket Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.archivedtickets.map((ticket) => (
                            <TableRow key={ticket.ticketname}>
                                <TableCell component="th" scope="row">
                                    {ticket.ticketname}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        );
    }
}
export default ArchivedTickets;