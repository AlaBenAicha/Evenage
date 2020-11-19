import React, { Component } from 'react';
import axios, { post } from 'axios';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

export default class EventLogoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      eventlogouploaded: false
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.UploadImage = this.UploadImage.bind(this)
  }



  onFormSubmit(e) {
    e.preventDefault()
    this.UploadImage(this.state.image);
  }
  onChange(e) {
    // this.setState({
    //    image: e.target.result,
    //   });
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length)
      return;
    this.createImage(files[0]);
    this.setState({ eventlogouploaded: true });
  }
  createImage(file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({
        image: e.target.result,
      })
    };
    reader.readAsDataURL(file);
  }
  UploadImage(image) {
    const url = 'http://localhost:8000/api/UploadImage';
    const formData = { file: this.state.image }
    return post(url, formData)
      .then(response => this.setState({ image: response.data }))
  }
  // Media(props) {
  //   const   { loading = false } = props;

  //   return (
  //     <Grid container wrap="nowrap">
  //     {(imageuploaded ? <img style={{ width: 800, height: 200 }}  src={this.state.image} />
  render() {
    const eventlogouploaded = this.state.eventlogouploaded;
    let eventlogo;
    if (eventlogouploaded) {
      eventlogo = (
         
        <Avatar src={this.state.image} style={{ height: '100px', width: '100px' }}/>
        
      );
    } else {
      eventlogo = (
        <Skeleton variant="circle">
        <Avatar style={{ height: '100px', width: '100px' }}/>
        </Skeleton>
      )
    }
    return (

      <form onSubmit={this.onFormSubmit}>
       
        <input accept="image/*"
          style={{ display: 'none' }}
          id="contained-button-event-logo"
          multiple
          type="file"
          diplay="none"
          onChange={this.onChange} />
           <Box
        position="absolute"
        top={380}
        left={450}
        zIndex="tooltip"
      >
        <label htmlFor="contained-button-event-logo" className="upload-button">
          <Button type="submit" variant="contained" color="primary" component="span" >
            Upload Logo
        </Button>
        </label>
        </Box>
        <Box marginRight={0.5} marginLeft={20} position="absolute"
        top={300} my={5} zIndex="tooltip">
          {eventlogo}
        </Box>
        {/* <img src={this.state.image}/> */}
      </form>
    )
  }
}

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