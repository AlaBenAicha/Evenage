import React, { useState, useEffect } from 'react';
import CoverImageUpload from './CoverImageUpload';
import EventLogoUpload from './EventLogoUpload';
import EventTimeline from './Timeline';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Partners from './Partners';
import AddPartnerForm from './AddPartnerForm';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import EventWebsitePage from '../pages/EventWebsitePage';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/auth';
import { withRouter } from 'react-router-dom';
import './pagebuilderstyle.scss';
import { IconButton } from '@material-ui/core';


class PageBuilder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.currentuser,
      user_id: this.props.currentuser.id,
      currentevent: '',
      events: [],
      partners: [],
      tickets: [],
      event_id: '',
      coverimage: '',
      logoimage: '',
      eventcreated: false,
      coverimageuploaded: false,
      logoimageuploaded: false,
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.createCoverImage = this.createCoverImage.bind(this);
    this.createLogoImage = this.createLogoImage.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.onCoverImageChange = this.onCoverImageChange.bind(this);
    this.onLogoImageChange = this.onLogoImageChange.bind(this);
    this.getEvent = this.getEvent.bind(this);
    this.redirectToWebsitePage = this.redirectToWebsitePage.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/events').then((response) => {
      this.setState({
        events: response.data,
      })
      this.getEvent(this.state.events);
    });
    axios.get('http://localhost:8000/api/eventpartners').then((response) => {

      this.setState({

        partners: response.data

      })

    });


  }
  getEvent(events) {
    events.map((event) => {
      if (event.user_id == this.state.user_id) {
        this.setState({
          currentevent: event,
          eventcreated: true,
        });
        if (this.state.currentevent !== null) {
          this.setState({
            coverimage: this.state.currentevent.coverimage,
            coverimageuploaded: true,
            logoimage: this.state.currentevent.logoimage,
            logoimageuploaded: true,
          });
        }
        axios.get('http://localhost:8000/api/tickets').then((response) => {
          this.setState({
            tickets: response.data,
          })

        })
      }
    })
  };
  onCoverImageChange(e) {
    // this.setState({
    //    image: e.target.result,
    //   });
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length)
      return;
    this.createCoverImage(files[0]);
    this.setState({ coverimageuploaded: true });
    // console.log(this.state.image);

  }
  createCoverImage(file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({
        coverimage: e.target.result,
      })
    };
    reader.readAsDataURL(file);
  }

  onLogoImageChange(e) {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length)
      return;
    this.createLogoImage(files[0]);
    this.setState({ logoimageuploaded: true });
    // console.log(this.state.image);

  }
  createLogoImage(file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({
        logoimage: e.target.result,
      })
    };
    reader.readAsDataURL(file);
  }
  redirectToWebsitePage() {
    const { history } = this.props;
    if (history) history.push('/eventwebsite');
  }

  updateEvent() {
    let id = this.state.currentevent.id;
    axios.post('http://localhost:8000/api/events/' + id, {
      coverimage: this.state.coverimage,
      logoimage: this.state.logoimage,
    }).then((response) => {
      console.log(response);
    })
  };

  render() {
    const coverimageuploaded = this.state.coverimageuploaded;
    const logoimageuploaded = this.state.logoimageuploaded;
    let eventcreated = this.state.eventcreated;
    let coverimage;
    let logoimage;
    let eventname;
    let eventdesc;
    let eventloc;
    if (eventcreated) {
      eventname = this.state.currentevent.eventname;
      eventdesc = this.state.currentevent.eventdescription;
      eventloc = this.state.currentevent.eventlocation;
    } else {
      eventname = "Event Title";
      eventdesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
      eventloc = "Tunisia";
    }

    if (coverimageuploaded) {
      coverimage = <img style={{ width: 800, height: 200 }} src={this.state.coverimage} />;
    } else {
      coverimage = <Skeleton variant="rect" width={800} height={200} />;
    }
    if (logoimageuploaded) {
      logoimage = (
        <Avatar src={this.state.logoimage} style={{ height: '100px', width: '100px' }} />
      );
    } else {
      logoimage = (
        <Skeleton variant="circle">
          <Avatar style={{ height: '100px', width: '100px' }} />
        </Skeleton>
      )
    }
    const { history } = this.props;
    let user = this.state.user
    return (
      <div className='pagebuildercontainer'>
        <div className='topbuttons'>

          <Button variant="contained" color="primary" component="span" onClick={this.updateEvent}>
            Save
        </Button>
          <Button variant="contained" color="primary" component="span" onClick={this.redirectToWebsitePage}>
            Publish
        </Button>

        </div>
        <div className='images'>
          <Grid container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <input accept="image/*"
              style={{ display: 'none' }}
              id="contained-button-cover-image"
              multiple
              type="file"
              diplay="none"
              onChange={this.onCoverImageChange} />
            <div className='uploadcoverbutton'>
              <Box

                zIndex="tooltip"
              >
                <label htmlFor="contained-button-cover-image" className="upload-button">
                  <Button variant="contained" color="primary" component="span" >
                    Upload Cover Image
                </Button>
                </label>
              </Box>
            </div>
            <div className='coverimagestyle'>
              <Box width={800} height={200} marginRight={0.5} zIndex="modal">
                {coverimage}
              </Box>
            </div>
          </Grid>

          <div>
            <div className='logouploadbutton'>
              <input accept="image/*"
                style={{ display: 'none' }}
                id="contained-button-event-logo"
                multiple
                type="file"
                diplay="none"
                onChange={this.onLogoImageChange} />
              <label htmlFor="contained-button-event-logo" className="upload-button">
                <Button type="submit" variant="contained" color="primary" component="span" >
                  Upload Logo
              </Button>
              </label>
            </div>
            <div className='logoimagestyle'>
              {logoimage}
            </div>
          </div>
        </div>
        <div className='textsection'>
          <Box

            zIndex="tooltip"
          >
            <Typography variant="h4">
              {eventname}
            </Typography>


          </Box>

          <Box
            zIndex="tooltip"
            display="flex"
          >
            <LocationOnIcon />
            <Typography variant="h6">
              {eventloc}
            </Typography>
          </Box>
        </div>
        <div className='descriptionsection'>
          <Box
            zIndex="tooltip"
          >
            <Typography variant="h7">
              {eventdesc}
            </Typography>
          </Box>
        </div>


        <div className='ticketssection'>
          <Box
            zIndex="modal">


            <Table aria-label="simple table" component={'span'}>
              <TableBody component={'span'}>
                {this.state.tickets.map((ticket) => (
                  <TableRow key={ticket.id} component={'span'}>
                    <TableCell component={'span'} scope="row">
                      <img style={{ width: 800, height: 200 }} src={ticket.ticketimage} />
                    </TableCell>

                    <TableCell align="right" padding='default' component={'span'}>
                      <Button variant="contained" color="primary" component="span" disabled>
                        Buy ticket
        </Button>
                    </TableCell>
                  </TableRow>

                ))}


              </TableBody>
            </Table>

          </Box>
        </div>


        <div className='partnerssection'>
          <Box

            zIndex="modal"
          >
            <Typography variant="h5">
              Partners
        </Typography>


            <Table aria-label="simple table" component={'span'} size='small'>
              <TableBody component={'span'}>
                <TableRow component={'span'}>
                  {this.state.partners.map((partner) => (
                    <TableCell component={'span'} scope="row">
                      <Avatar style={{ height: '100px', width: '100px' }} src={partner.partnerlogoimage} />
                      <IconButton aria-label="delete" size="small">
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>



          </Box>


          <Box
            zIndex="modal"
          >
            <Partners event={this.state.currentevent}>
              <AddPartnerForm event={this.state.currentevent} />
            </Partners>
            {/* {partners} */}
          </Box>
        </div>

        <div className='programsection'>
          <Box
            zIndex="modal"
          >
            <EventTimeline />
          </Box>

        </div>
        <div className='bottomofpage'>


          <Typography variant="h6">
            © 2020 Powered By Evenage.  All rights reserved.
        </Typography>

        </div>

      </div>
    );
  }
}
export default PageBuilder;