import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, ListItem, ListItemIcon, IconButton, ListItemText, Avatar, Divider, List, Typography, Box } from '@material-ui/core';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import AppsIcon from '@material-ui/icons/Apps';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        height: "100vh",
        background: "#511",

    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    }

}));

const menuItems = [{
        listIcon: < Home /> ,
        listText: "Home",
        listPath:"/"
    },
    {
        listIcon: < AssignmentInd /> ,
        listText: "Resume",
        listPath:"/resume"
    },
    {
        listIcon: < Apps /> ,
        listText: "Projects",
        listPath:"/Projects"
    },
    {
        listIcon: < ContactMail /> ,
        listText: "Contact",
        listPath:"/contacts"
    }
]
const Navebar = () => {

    const [state, setState] = useState({ right: false });

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open })
    }

    const slideList = (slider) => {
        return (
             < >
            <Box className = { classes.menuSliderContainer }
            component = "div">
            <Avatar className = { classes.avatar }
            src = "../avatar.png"
            alt = " Esmat Haideria" />
            <Divider /> { /* to make list : <List> then <ListItem>  then <ListItemType(icon,checkbox...)>*/ } 
            <List> {
                menuItems.map((item, index) => {
                    return (

                        <ListItem button key = { index } component={Link} to={item.listPath} >
                             { /*we add "button" attribute to make list item active as button*/ } 
                        <ListItemIcon className = { classes.listItem } > { item.listIcon } </ListItemIcon> 
                        <ListItemText primary = { item.listText }
                        className = { classes.listItem }/>
                         </ListItem>

                    )
                })
            }

            </List>
             </Box> 
             </>
        )
    }
    const classes = useStyle();
    return ( <Fragment>

        <Box component = 'nav' >

        <AppBar position = "static"
        style = {
            { background: "#222" } } >
        <Toolbar >
        <IconButton onClick = { toggleSlider("right", true) } >
        <AppsIcon style = {{ color: "tomato"}}/>
         </IconButton> 
         <Typography variant = "h5"style = {{ color: "tan" } } > Portfolio </Typography>

        <MobilRightMenuSlider anchor = "left"
        open = { state.right }
        onClose = { toggleSlider("right", false) } > { slideList("right") } 
        </MobilRightMenuSlider>

        </Toolbar> 
        </AppBar>

        </Box> 
        </Fragment>
    )
}

export default Navebar;