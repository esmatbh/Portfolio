import React from 'react'
import {Typography ,Box} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navebar';



const useStyles=makeStyles(theme=>({
    mainContainer:{
        background:"#233"
    },
    timeLine:{
        position:"relative",
        padding:"1rem",
        margin:"0 auto",
        "&:before":{
            content:"''",
            position: "absolute",
            height:"100%",
            border:"1px solid tan",
            right:"40px",
            top:0
        },
        "&:after":{
            content:"''",
            display:"table",
            clear:"both"
        },
        [theme.breakpoints.up("md")]:{
            padding:"2rem",
            "&:before":{
                left:"calc(50% - 1px)",
                right:"auto"
            }
        }
      
        
    }
}));


const Resume = () => {
    const classes=useStyles();
    return (
        <>
        <Navbar/>
        {/*if you want  to add two classes for one element use : className={`${classes.class1} ${classes.class2}`} */}
       <Box component="header" className={classes.mainContainer} >
         <Typography variant="h4"  align="center">
             Working Experience
         </Typography>

         <Box component="div" >
         <Typography variant="h2" className={classes.timeLine} >
           2013
         </Typography>
       </Box>
       </Box>
       </>
    )
}

export default Resume;
