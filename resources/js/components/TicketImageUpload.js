import React, { Component } from 'react';
import axios, { post } from 'axios';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';

export default class CoverImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image,
      ticketimageuploaded: false
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
   
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length)
      return;
    this.createImage(files[0]);
    this.setState({ ticketimageuploaded: true });
  }
  createImage(file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({
        image: e.target.result
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
  render() {
    const ticketimageuploaded = this.state.ticketimageuploaded;
    let coverimage;

    if (ticketimageuploaded) {
      coverimage = <img style={{ width: 800, height: 200 }} src={this.state.image} />;
    } else {
      coverimage = <Skeleton variant="rect" width={800} height={200} />;
    }
    return (

      <form onSubmit={this.onFormSubmit}>
      
        <input accept="image/*"
          style={{ display: 'none' }}
          id="contained-button-ticket-image"
          multiple
          type="file"
          diplay="none"
          onChange={this.onChange} />
        <label htmlFor="contained-button-ticket-image" className="upload-button">
          <Button type="submit" variant="contained" color="primary" component="span" >
            Upload Ticket Image
        </Button>
        </label>
        <Box width={800} height={200} marginRight={0.5} my={5}>
          {coverimage}
        </Box>
      </form>
    )
  }
}

