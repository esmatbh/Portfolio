import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles  } from '@material-ui/core/styles';
import Navbar from './Navebar';
import {AppBar,Tabs,Tab,Typography,Box} from '@material-ui/core';

const TabPanel=(props)=> {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps=(index)=> {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5,
    backgroundColor: "tan",
    height:"80vh"
  },
  Taps:{
      display:"grid",
      gridTemplateColumns: "auto auto auto auto auto",
      justifyContent:'center'
      
  }
}));

 const Resume=()=> {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Navbar/>
    <div className={classes.root}>
      <AppBar position="static" style={{background:"#888" }}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className={classes.Taps}
         style={{   color:"#ffffff"}} >
          <Tab label="Item One" {...a11yProps(0)}xs={2} />
          <Tab label="Item Two" {...a11yProps(1)} xs={2} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item four" {...a11yProps(3)} />
          <Tab label="Item five" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
        Item One
      </TabPanel>
      <TabPanel value={value} index={1} >
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} >
        Item Three
      </TabPanel>

      <TabPanel value={value} index={3} >
        Item four
      </TabPanel>
      <TabPanel value={value} index={4} >
        Item five
      </TabPanel>
    </div>
    </>
  );
}
export default Resume;