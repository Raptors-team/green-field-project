import React from "react"
import './App.css';
import 'date-fns';
import { Toolbar, AppBar, IconButton, Typography, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
// import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
// import MaterialUIPickers from "./date";
// import TextField from '@material-ui/core/TextField';

class Greeting extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div>
                 <div position="static" className="greeting" >
                        <Typography variant="h3" className="text" >
                            Where to next, .......
                                 </Typography>
                    </div>
            </div>
        )
    }
}

export default Greeting

