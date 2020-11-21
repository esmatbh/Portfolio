import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  {Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography, Box}from '@material-ui/core';
import Navebar from "./Navebar"
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
  container:{
    display:"grid",
    gridAutoColumns:"50% 50%"
  }
});

const projects=['Shopping using HTML & CSS & JavaScript', 'Shopping using React-Redux',
'Hotel website using React-redux',"Portfolio using React-Material UI"]
const Projects=()=> {
  const classes = useStyles();

  return (
    <Box component="div">
      <Navebar/>
      {/* you can not use css grid in m-ui , i prefeare to use css grid by using div insted of grid 
      and style like this : 
     container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  } */}
      <Grid container justify="center" spacing={3} >
        {projects.map((item,index)=>{
          return (
           <Grid item xs={12} sm={6} key={index}>
           <Card className={classes.media}>
            <CardActionArea>
              <CardMedia
                
                image="../coffee-apple.jpg"
                
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
           </Grid>
          )  
    })}
  
     </Grid>
   
    
    </Box>
  
  );
}

export default Projects;
