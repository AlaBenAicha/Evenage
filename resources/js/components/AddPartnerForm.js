import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Skeleton from '@material-ui/lab/Skeleton';
import axios, { post } from 'axios';



export default class AddPartnerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPartnerData: {
        partnerlogoimage: '',
        partnername: ''
      },
      partnerlogouploaded: false
    }
    // this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.addPartner = this.addPartner.bind(this)
    this.onUpload = this.onUpload.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // onFormSubmit(e) {
  //   e.preventDefault()
  //   console.log(this.state.newPartnerData)
  //   // this.addPartner(this.state.partnername, this.state.partnerlogo);
  // }

  onChange(e) {
    this.setState({
      newPartnerData: {
        [e.target.name]: e.target.value
      }

      //  [e.target.name]: e.target.result,
    });
    //  this.createPartnerLogo(files[0]);
    //  this.setState({ partnerlogouploaded: true });
  }
  onUpload(e){
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState(prev => ({
        ...prev,
        newPartnerData: {
          ...prev.newPartnerData,
          partnerlogoimage: e.target.result,
      },
      partnerlogouploaded: true
    }));
    };
    reader.readAsDataURL(file);
  }
  // onUpload(e) {
  //   let file = e.target.files[0];
    
  //   this.setState(prev => ({
  //     ...prev,
  //     newPartnerData: {
  //       ...prev.newPartnerData,
  //       partnerlogoimage: file.name,
  //     },
  //     partnerlogouploaded: true
  //   }));
  //   this.createImage(file);
  // }
    // this.setState({
    //   newPartnerData: {
    //     partnerlogo: file,
    //   }
    // }); 
    // setState(prev=> {...prev, partnerlogouploaded: true})
    // this.setState({ partnerlogouploaded: true });
  
  handleSubmit(e) {
    e.preventDefault()
    this.addPartner();
    console.log(this.state.newPartnerData)
    console.log(this.state.partnerlogouploaded)
  }
  // onUpload(file) {
  //   let reader = new FileReader();
  //   reader.onload = (e) => {
  //     this.setState({
  //       partnerlogo: e.target.result,
  //     })
  //   }; 
  //   reader.readAsDataURL(file);
  // }
  addPartner() {
    const url = 'http://localhost:8000/api/eventpartners';
    const formData = { file: this.state.partnerlogo }
    return axios.post(url, this.state.newPartnerData)
    .then(response => this.setState({ newPartnerData: response.data }))}
      // .then((response) => {
      //      let { partners } = this.state.newPartnerData;
      //      partners.push(response.data);
  //       this.setState({
  //         newPartnerData: {
  //           partnerlogoimage: '',
  //           partnername: '',
  //         }
  //       })
  //     })
  // }


  render() {
    // const newPartnerData = this.state.newPartnerData;
    const partnerlogouploaded = this.state.partnerlogouploaded;
    let partnerlogo;
    if (partnerlogouploaded) {
      partnerlogo = <img style={{ width: 200, height: 200 }} src={this.state.newPartnerData.partnerlogoimage} />;
    } else {
      partnerlogo = <Skeleton variant="rect" width={200} height={200} />;
    }
    return (
      <form >
        <TextField
          name="partnername"
          autoFocus
          margin="dense"
          id="name"
          label="Partner's name"
          type="text"
          fullWidth
          onChange={this.onChange}
        />
        <input accept="image/*"
          style={{ display: 'none' }}
          id="contained-button-partner-logo"
          name="partnerlogoimage"
          multiple
          type="file"
          diplay="none"
          onChange={this.onUpload} />
        <label htmlFor="contained-button-partner-logo" className="upload-button">
          <Button variant="contained" color="primary" component="span" >
            Upload Partner Logo
        </Button>
        </label>
        <Box width={200} height={200} marginRight={0.5} my={5}>
          {partnerlogo}
        </Box>
        <Button type="submit" onClick={this.handleSubmit} variant="contained" color="primary" component="span" >
          Add
        </Button>
      </form>
    )
  }
}