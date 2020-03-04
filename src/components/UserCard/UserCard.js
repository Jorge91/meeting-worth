import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
    color: '#fff',
    background: '#181F2C',
    fontFamily: "'Graphik', 'Roboto', Arial, Helvetica, sans-serif;"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    background: '#181F2C',
    fontFamily: "'Graphik', 'Roboto', Arial, Helvetica, sans-serif;",
    marginLeft: 8,
    marginBottom: 15
  },
  pos: {
    marginBottom: 12,
    color: '#fff',
    background: '#181F2C',
    fontFamily: "'Graphik', 'Roboto', Arial, Helvetica, sans-serif;"
  }
});


function UserCard({name, role, description, img_url}) {

        const classes = useStyles();
        // const {name, role, description, img_url} = this.props;
    	
        return (
        	
            	<Card className={classes.root}>
                  <CardContent>
                  <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                    >
                        <Avatar alt={name} src="/static/images/avatar/1.jpg" /> 
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                          {name}
                        </Typography>
                     
                 </Grid>    
                    
                    <Typography className={classes.pos} color="textSecondary">
                      {role}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {description}
                    </Typography>
                  </CardContent>
                </Card>
            );
    
}

export default UserCard;