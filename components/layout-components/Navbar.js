import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { ButtonGroup, Checkbox, Fab, FavoriteIcon, NavigationIcon, EditIcon } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  uday: {
        flexGrow: 1,
    },
    text: {
        color: "white"
    },
  menuButton: {
    marginRight: theme.spacing(2),
  },
    title: {
        flexGrow: 1,
         color: "red",
        // [theme.breakpoints.only('xs')]: {
           
        // },
        // [theme.breakpoints.up('sm')]: {
        //     color: "white",
        // },
    },
    myButton: {
        backgroundColor: "red",
    },
    myStyle: {
        flexDirection: 'row',
    },
      root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    },
    myButtonStyle: {
        alignSelf: 'center',
        marginLeft: theme.spacing(10),
        justifyContent: 'center',
         
        [theme.breakpoints.only('xs')]: {
           backgroundColor: "red",
        },
  }
}));

const Navbar = () => {
     const classes = useStyles();
  return (
   <React.Fragment>
     <div className={classes.uday}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="span" className={classes.title}>
            News
          </Typography>
            <Link href="/aboutus" variant="body2" className={classes.text}>
                Kiran
            </Link>
          <Button color="inherit">Login</Button>
        </Toolbar>
              </AppBar>
               {/* how to set in row */}
              <div className={classes.myStyle}> 

                  

                    <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary" >
                Primary
                </Button>
                <Button variant="contained" color="secondary">
                Secondary
                </Button>
                <Button variant="contained" disabled>
                Disabled
                </Button>
                <Button variant="contained" color="primary" href="/aboutus" className={classes.myButton}>
                Link
              </Button>
              


        
        

              </div>

              <div className={classes.myStyle}> 
                  
                     <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              
      

                 </div>
           
                       <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              

                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
              


              <Checkbox
                value="checkedA"
                inputProps={{ 'aria-label': 'Checkbox A' }}
              />
              
                 <div className={classes.myStyle}> 
                  
                  <Fab color="primary" aria-label="add" className={classes.myButtonStyle}>
                      <AddIcon /> 
                   
                  </Fab>
                  

              </div>
              








              
    </div>
    </React.Fragment>
  );
}

export default Navbar;