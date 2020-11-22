import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles  } from '@material-ui/core/styles';
import Navbar from './Navebar';
import {AppBar,Tabs,Tab,Typography,Box} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

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
    height:"100%"
  },
  root1:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center',
    '& > .about': {
      margin: theme.spacing(1),
      width: theme.spacing(70),
      height: theme.spacing(50),
    
    },
    '& > .strengthAndlangueges': {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(50),
    },
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
          <Tab label="About" {...a11yProps(0)}xs={2} />
          <Tab label="Experience" {...a11yProps(1)} xs={2} />
          <Tab label="Education" {...a11yProps(3)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
      <div className={classes.root1}>
      <Paper elevation={0} className="about" >
        <h3 style={{marginLeft:"1%"}}>About :</h3>
        <p style={{margin:"1%"}}> A Telecommunication Engineer graduated from AL Najah National University (2014) 
          and as you'll see, I have good knowledge of efficiently coding websites and applications 
          using modern HTML, CSS, and JavaScript, as well as popular Frameworks and libraries,
           building state-of-the-art, easy to use, user-friendly websites and applications
            is truly a passion of mine and I am confident I would be an excellent addition to your organization. 
            In addition to my knowledge base, I actively seek out new technologies
             and stay up-to-date on industry trends and advancements. 
             I started the training on frontend development due to my love for this field and my desire to work in it. Result oriented, self-driven, highly motivated, Smart and hungry to learn new technologies, methodologies, Strategies and processes.</p>
      </Paper>
     
      <Paper elevation={3} className="strengthAndlangueges" >
        <h3 style={{marginLeft:"1%"}}>Strength</h3>
        <ul>
          <li>Good oral, written and presentation   skills.</li>
          <li>A high tolerance of stress and enjoys responsibilities.</li>
          <li>Quick learner with good grasping ability.</li>
          <li>Action-oriented and result-focused.</li>
          <li>Great time management skill.</li>
          <li>Lead and work as a team in an organized way.</li>
        </ul>
        <h3 style={{marginLeft:"1%"}}>Languages</h3>
        <ul>
          <li>Arabic</li>
          <li>English</li>
        </ul>
      </Paper>
    </div>
      </TabPanel>
      <TabPanel value={value} index={1} >
      <Paper elevation={0} className="about" >
        <h3 style={{marginLeft:"1%"}}>Experience :</h3>
        <p  style={{margin:"1%"}}><b> Frontend Developer: </b>starting the Training and 
        creating frontend projects using below skills (2019-2020)</p>
        <div style={{display:"flex",flexDirection:"row",flexGrow:"wrap"}}>
          <ul>
            <h3>Languages :</h3>
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>JavaScript</li>
          </ul>
          <ul>
            <h3>Libraries :</h3>
            <li>React</li>
            <li>Jquery</li>
          </ul>
          <ul>
            <h3>Frameworks:</h3>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>Material-UI</li>
          </ul>
          <ul>
            <h3>Storage:</h3>
            <li>MongoDB</li>
            
          </ul>
        </div>
        <p  style={{margin:"1%",padding:"1%"}}><b> Project Engineer : </b> working as project Engineer
         for programing and maintennce Fire alarm systems (2016-2020)</p>
      </Paper>
      </TabPanel>
      <TabPanel value={value} index={2} >
      <Paper elevation={0} className="about" >
        <h3 style={{marginLeft:"1%"}}>Education :</h3>
        <ul>
          <li > B.Sc in Telecom Engineering (2014) from ALNajah National University with good degree............2014 
       </li>
          <li>High School (2009) from Kufurrai Secondary School-Jenin with 96.7% marks...........2009</li>
        </ul>
      </Paper>
      </TabPanel>
      
    </div>
    </>
  );
}
export default Resume;