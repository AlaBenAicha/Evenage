import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CreateTicket from './CreateTicket';
import ListOfTickets from './ListOfTickets';
import ArchivedTickets from './ArchivedTickets';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 1000,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TicketsMenu(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const  [currentuser, setCurrentUser] = React.useState(props.currentuser);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative"  >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="List Of Tickets" {...a11yProps(0)} />
          <Tab label="Create Ticket" {...a11yProps(1)} />
          <Tab label="Archived Tickets" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ListOfTickets currentuser={currentuser}/>
      </TabPanel>
      <TabPanel value={value} index={1} >
        <CreateTicket currentuser={currentuser}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ArchivedTickets />
      </TabPanel>

    </div>
  );
}