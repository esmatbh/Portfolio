import React from 'react';
import Navbar from './Navebar'
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';

const useStyles=makeStyles({
    particlesCnav:{
        position:"absolute"
    }
})
const Home = () => {
    const classes=useStyles();
    return (
        <div>
        {/* to use Particles follow : https://www.npmjs.com/package/react-particles-js */}
      <Particles 
        canvasClassName={classes.particlesCnav}
                params={{
                    particles: {
                        number: {
                            value: 100
                           
                        },
                        shape:{
                            type:"star",
                           stroke:{
                            color:"tomato",
                            width:12
                           }
                        }
                    }
                }} />
           <Navbar/>
           <Header/>
        </div>
    )
}

export default Home;
