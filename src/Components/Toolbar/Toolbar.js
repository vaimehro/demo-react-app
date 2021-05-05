import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
const toolbar = props =>(
    <header className="toolbar"> 
        <nav className="toolbar__navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
            <div className="spacer"></div>
            <div className="toolbar__navigation__items">
                <ul>
                    <li><a href="/">Product</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </div>
        </nav>

    </header>
);

export default toolbar;