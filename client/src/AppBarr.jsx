import React from "react"
import './App.css';
import 'date-fns';
import { Toolbar, AppBar, IconButton, Typography, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import MaterialUIPickers from "./date";
import TextField from '@material-ui/core/TextField';




class AppBarr extends React.Component {
    constructor() {
        super()
        this.state ={
        }   
    }
    render() {
        return (
            <div>
              <div className="NavBar">
<AppBar position="static">
  <Toolbar className="toolBar">
    <IconButton color='inherit' edge="start" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography className="typography" variant="h4">
      HotelCom
</Typography>
    <Button color="inherit">
      Login
</Button>
    <Button color="inherit">
      Signup
  </Button>
    <IconButton color='inherit' edge="start" aria-label="menu">
      <AccountCircleIcon className="Account" />
    </IconButton>
  </Toolbar>
</AppBar>
</div>

            </div>
        )
    
    }
}





// <div className="NavBar">
// <AppBar position="static">
//   <Toolbar className="toolBar">
//     <IconButton color='inherit' edge="start" aria-label="menu">
//       <MenuIcon />
//     </IconButton>
//     <Typography className="typography" variant="h4">
//       HotelCom
// </Typography>
//     <Button color="inherit">
//       Login
// </Button>
//     <Button color="inherit">
//       Signup
//   </Button>
//     <IconButton color='inherit' edge="start" aria-label="menu">
//       <AccountCircleIcon className="Account" />
//     </IconButton>
//   </Toolbar>
// </AppBar>
// </div>


export default AppBarr;