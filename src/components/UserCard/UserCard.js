import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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


function UserCard({name, role, description, img_url}) {

        const classes = useStyles();
        // const {name, role, description, img_url} = this.props;
    	
        return (
        	
            	<Card className={classes.root}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      {name}
                    </Typography>
                    
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