import logo from './logo.svg';
import './App.css';
import 'date-fns';
import React from "react"
import { Toolbar, AppBar, IconButton, Typography, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import MaterialUIPickers from "./date";
import TextField from '@material-ui/core/TextField';
import GoogleMaps from "./Inputsearch";
import Images from './Card';

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    // fetch("https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=amsterdam", {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-host": "hotels4.p.rapidapi.com",
    //     "x-rapidapi-key": "404ada1e15mshc41c87c422d49e7p1b6eebjsn9a6920820be0"
    //   }
    // })
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then((data) => console.log(data))
    //   .catch(err => {
    //     console.log(err);
    //   });
  }



  render() {
    return (
      // <div className="App">
      //  <SignInAndSignUpPage/>
      // </div>
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
        <div className="Greeting" >
          <div position="static" className="greeting" >
            <Typography variant="h3" className="text" >
              Where to next, .......
          </Typography>
          </div>
          <form className="form" noValidate autoComplete="off">
            <GoogleMaps />
            <MaterialUIPickers name="check in" />
            <MaterialUIPickers name="check out" />
            <div className="search">
              <Button  variant="contained" size="small" color="secondry">
                search
          </Button>
            </div>
          </form>
        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
