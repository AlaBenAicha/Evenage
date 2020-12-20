import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class PaymentManagement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        window.open('https://dashboard.stripe.com/oauth/authorize?response_type=code&client_id=ca_IIsBYcegG3YJTZstiUGphIR50uexvOvX&scope=read_write');
    }
    
    render() {
        return (
            <Grid container
                direction="column"
                justify="space-between"
                alignItems="center"
            >
                <Box
                    position="absolute"
                    top={100}
                    left={300}

                    zIndex="modal"
                >
                    <Typography color="textSecondary" gutterBottom>
                        Account's Balance
            </Typography>
                </Box>
                <Box
                    position="absolute"
                    top={140}
                    left={330}

                    zIndex="modal"
                >
                    <Typography variant="h5">
                        $ NA
            </Typography>
                </Box>
                <Box
                    position="absolute"
                    top={200}
                    left={250}

                    zIndex="modal"
                >

                    <Button variant="contained" color="primary" onClick={this.handleClick}>
                        Connect Stripe Account
                </Button>

                </Box>
            </Grid>

        )
    }
}
export default PaymentManagement;