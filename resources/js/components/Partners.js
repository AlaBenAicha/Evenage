import React, { Component } from 'react';
import axios, { post } from 'axios';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AddPartnerForm from './AddPartnerForm';


const useStyles = makeStyles(theme => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5)
  },
  dialogTitle: {
    paddingRight: '0px'
  }
}))


const PaperComponent = (props) => {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}
export default function Partners(props) {
  const { title, children } = props;
  const [openPopup, setOpenPopup] = React.useState(false);

  const classes = useStyles();
  const handleClose = () => {
    setOpenPopup(false);
  }


  const onFormSubmit = (e) => {
    e.preventDefault()
    this.UploadImage(this.state.image);
  }

  const onChange = (e) => {
    // this.setState({
    //    image: e.target.result,
    //   });
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length)
      return;
    this.createPartner(files[0]);
    this.setState({ partnerlogouploaded: true });
  }
  return (

    <div>
      <Grid container spacing={3}>

        <Grid item xs={4}>
          <IconButton onClick={() => { setOpenPopup(true) }} variant="contained" component="span" aria-label="add">
            <AddIcon />
          </IconButton>

          <Dialog
            open={openPopup}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
              Add partner
      </DialogTitle>
            <DialogContent dividers>
              <AddPartnerForm />
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Cancel
        </Button>

            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>

    </div>
  )
}

  // Media(props) {
  //   const   { loading = false } = props;

  //   return (
  //     <Grid container wrap="nowrap">
  //     {(imageuploaded ? <img style={{ width: 800, height: 200 }}  src={this.state.image} />
    // {this.state.partners.map() => (
    //   if (partnerlogouploaded) {
    //   <Grid item xs={4}>
    //     partners = <img style={{ width: 80, height: 80 }} src={this.state.image} />;

    //     </Grid>


    // } else {
    //   partners = <Skeleton variant="rect" width={80} height={80} />;
    // }
    // )}

    // const eventlogouploaded ='false';
    // let eventlogo;
    // if (eventlogouploaded) {
    //   coverimage=<img  src={this.state.image} />;
    //   } else {
    //     coverimage=<Skeleton variant="rect" />;
    //   } 



//   const [pictures, setPictures] = useState([]);

//   const onDrop = picture => {
//     setPictures([...pictures, picture]);
//   };
//   return (
//     <ImageUploader
//       {...props}
//       withIcon={true}
//       onChange={onDrop}
//       imgExtension={[".jpg", ".gif", ".png", ".gif"]}
//       maxFileSize={5242880}
//       withPreview='True'
//     />
//   );
//  };

// export default ImportImage;