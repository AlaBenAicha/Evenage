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

const useStyles = makeStyles({
    table: {
        minWidth: 500,
    },
});

function createData(ticket, sold, available) {
    return { ticket, sold, available };
}

const rows = [
    createData('Ticket 1', 0, 100),
    createData('Ticket 2', 0, 50),
    createData('Ticket 3', 0, 600),
];

export default function ListOfTickets() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Ticket</TableCell>
                        <TableCell align="right">Sold</TableCell>
                        <TableCell align="right">Available</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.ticket}
                            </TableCell>
                            <TableCell align="right">{row.sold}</TableCell>
                            <TableCell align="right">{row.available}</TableCell>
                            <TableCell align="right" padding='default'>
                                <ModifyTicket variant="contained"/>
                                <Button variant="outlined" color="secondary">
                                    Archive
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}