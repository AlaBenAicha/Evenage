import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PageBuilder from './PageBuilder';
import Details from './Details';
import TicketsMenu from './TicketsMenu';
import Stats from './Stats';
import PaymentManagement from './PaymentManagement';
import { useAuth } from '../context/auth';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'div'}>{children}</Typography>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: 1200,
  },
}));

function Menu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let {setCurrentUser, setToken, currentUser} = useAuth();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Details" {...a11yProps(0)} />
        <Tab label="Stats" {...a11yProps(1)} />
        <Tab label="Tickets" {...a11yProps(2)} />
        <Tab label="Website Builder" {...a11yProps(3)} />
        <Tab label="Payments" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Details currentuser={currentUser}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stats />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TicketsMenu currentuser={currentUser}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <PageBuilder currentuser={currentUser}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <PaymentManagement />
      </TabPanel>
    </div>
  );
}
export default Menu;