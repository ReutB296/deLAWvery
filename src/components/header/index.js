
import {AppBar,Toolbar}  from "@material-ui/core";
import logo from '../../img/Capture.JPG';
import './style.css'


export default function Header(){

    return(
        <AppBar position="sticky">
            <Toolbar>
            <div className="logoContainer">
                <img className="logo" src={logo} alt="logo"/>
            </div>
            </Toolbar>
      </AppBar>
    )
}