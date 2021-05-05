import React from 'react';
import './DrawerToggleButton.css'; 

const drawerToggleButton = props =>(
    <button className="toggle_button" onClick={props.click} >
        <span className="drawer_lines"></span>
        <span className="drawer_lines"></span>
        <span className="drawer_lines"></span>


        

    </button>
);

export default drawerToggleButton