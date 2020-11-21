import React from 'react'
import {Typography , Grid,Avatar,Box} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';


const useStyles=makeStyles (theme =>({
    avatar:{
        width:theme.spacing(15),
        height:theme.spacing(15),
        margin:theme.spacing(1)
    },
    title:{
        color:"tomato"
    },
    subTitle:{
        color:"tan",
        marginBottom:"3rem"
    },
    typedContainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        width:"100vw",
        textAlign:"center",
        zIndex:1
    }
}))
const Header = () => {
    const classes=useStyles();
    return (
        <Box  className={classes.typedContainer}>
            <Grid container justify= "center">
            <Avatar className={classes.avatar}   alt="Esmat" src= "../avatar.png" />
            </Grid>
          
            <Typography variant="h4" className={classes.title} >
                {/* we are using npm react-Typed  : follow this link: https://www.npmjs.com/package/react-typed */ }

                <Typed  strings={['Esmat Haideria'] } typeSpeed={40}> 
                </Typed>
            </Typography>
            <br/>
            <Typography variant="h5"  className={classes.subTitle} >
                <Typed  strings={['FrontEnd Dev',' Web Dev'] } typeSpeed={40} backSpeed={50} loop > 
                </Typed>
            </Typography>
        </Box>
    )
}

export default Header;