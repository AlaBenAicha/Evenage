import React, { useState } from 'react';
import CoverImageUpload from '../components/CoverImageUpload';
import EventLogoUpload from '../components/EventLogoUpload';
import EventTimeline from '../components/Timeline';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Partners from '../components/Partners';
import AddPartnerForm from '../components/AddPartnerForm';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Avatar from '@material-ui/core/Avatar'


function EventWebsitePage() {
  const [partners, setPartners] = React.useState([]);

  const componentWillMount = () => {

    axios.get('http://localhost:8000/eventpartners').then((response) => {

      setPartners({

        partners: response.data

      })

    });

  }
  return (
    <div>
      
      <Grid container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Skeleton variant="rect" width={800} height={200} />
      </Grid>
      <Box
        position="absolute"
        top={150}
        left={350}
        zIndex="tooltip"
      >
      <Skeleton variant="circle">
        <Avatar style={{ height: '100px', width: '100px' }}/>
        </Skeleton>
        </Box>

        <Box
        position="absolute"
        top={300}
        left={250}
        zIndex="tooltip"
      >
      <Typography variant="h4">
        Event 1
        </Typography>
        </Box>

        <Box
        position="absolute"
        top={302}
        left={800}
        zIndex="tooltip"
      >
        <LocationOnIcon  />
        </Box>
        <Box
        position="absolute"
        top={300}
        left={830}
        zIndex="tooltip"
      >
      <Typography variant="h6">
        Tunisia
        </Typography>
        </Box>

        <Box
        position="absolute"
        top={350}
        left={250}
        right={200}
        zIndex="tooltip"
      >
      <Typography variant="h7">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
      mollit anim id est laborum.
        </Typography>
        </Box>


        <Box
        position="absolute"
        top={580}
        left={1000}
        zIndex="tooltip"
      >
      <Button variant="contained" color="primary" component="span" disabled>
        Buy ticket
        </Button>
        </Box>
        <Box width={800} height={200} marginRight={0.5} position="absolute"
        top={500}
        left={350}
        zIndex="modal">
        <Skeleton variant="rect" width={800} height={200} />
          </Box>

          <Box
        position="absolute"
        top={800}
        left={1000}
        zIndex="tooltip"
      >
      <Button variant="contained" color="primary" component="span" disabled>
        Buy ticket
        </Button>
        </Box>
          <Box width={800} height={200} marginRight={0.5} position="absolute"
        top={720}
        left={350}
        zIndex="modal">
        <Skeleton variant="rect" width={800} height={200} />
          </Box>

          <Box
        position="absolute"
        top={1020}
        left={1000}
        zIndex="tooltip"
      >
      <Button variant="contained" color="primary" component="span" disabled>
        Buy ticket
        </Button>
        </Box>
          <Box width={800} height={200} marginRight={0.5} position="absolute"
        top={940}
        left={350}
        zIndex="modal">
        <Skeleton variant="rect" width={800} height={200} />
          </Box>


        <Box
        position="absolute"
        top={1200}
        left={400}
        zIndex="modal"
      >
      <Typography variant="h5">
        Partners
        </Typography>
        <Skeleton variant="circle">
        <Avatar style={{ height: '100px', width: '100px' }}/>
        </Skeleton>
        </Box>
      
      <Box
        position="absolute"
        top={1300}
        left={600}
        bottom={100}
        zIndex="modal"
      >
      <EventTimeline />
      </Box>
      <Box
        position="absolute"
        top={1700}
        left={520}
        bottom={100}
        zIndex="modal"
      >
        <Typography variant="h6">
        © 2020 Powered By Evenage.  All rights reserved.
        </Typography>
         </Box>
      {/* <input
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-event-logo-button-file"
        multiple
        type="file"
        diplay="none"
      />
      <label htmlFor="contained-event-logo-button-file" className="upload-button">

      </label> */}
    </div>
  );
}
export default EventWebsitePage;