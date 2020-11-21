import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {  ListItem, ListItemIcon, IconButton, ListItemText,  List, Typography, Box } from '@material-ui/core';
import Navebar from './Navebar';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const menuItems=[{
    listIcon: < PhoneAndroidIcon /> ,
    listText: "00966 581306989"
    
},
{
    listIcon: < EmailIcon /> ,
    listText: "esmat.b.haideria@gmail.com"
    
},
{
    listIcon: < LocationOnIcon /> ,
    listText: "Saudi  Arabia"
    
}
]

const useStyle = makeStyles(theme => ({
    
    icons: {
      color:"tan",
      fontWeight:400,
      fontSize:"20px"

    }}))
const Contacts = () => {
    const classes = useStyle();
    return (
        
        <Box>
            <Navebar/>
            <List style={{marginLeft:"40vw ",marginTop:"35vh"}}> 
                { menuItems.map((item, index) => {
                    return (

                        <ListItem button key = { index } >
                             { /*we add "button" attribute to make list item active as button*/ } 
                        <ListItemIcon className = { classes.icons } > { item.listIcon } </ListItemIcon> 
                        <ListItemText primary = { item.listText }
                        className = { classes.icons }/>
                         </ListItem>

                    )
                })
            } 
            </List>
        </Box>
        
    )
}

export default Contacts;
