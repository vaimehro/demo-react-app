import React from 'react';
import { NavItem } from 'react-bootstrap';
import './SideDrawer.css';
const sideDrawer=props =>{
    let drawerClasses ='side-drawer sidebar-container';
    if(props.show){
        drawerClasses='side-drawer open sidebar-container';
    }
    return(
    <nav className={drawerClasses}>
        <ul className="sidebar-navigation ">
        <li className="header list-group-item">Navigation</li>
            {
            
            
            props.navList.map(item=>(<li className="list-group-item"><a href={item.path}>{item.title}</a></li>))
        }      

        </ul>
    </nav>
    )
};
export default sideDrawer;

