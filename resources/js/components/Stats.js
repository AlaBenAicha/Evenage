import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Stats() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    < Grid container spacing={3} className="griditem">
    <Grid item xs={6}> 
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Website visitors
        </Typography>
        <Typography variant="h5"> 
        1
        </Typography>
        
      </CardContent>
    </Card>
    </Grid>

    <Grid item xs={6}>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Tickets sold
        </Typography>
        <Typography variant="h5">
            0
        </Typography>
        
      </CardContent>
    </Card>
    </Grid>
    </Grid>
  );
}