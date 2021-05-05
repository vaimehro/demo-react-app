import React from 'react';
import { NavItem } from 'react-bootstrap';
import './SideDrawer.css';
const sideDrawer=props =>{
    let drawerClasses ='side-drawer';
    if(props.show){
        drawerClasses='side-drawer open';
    }
    return(
    <nav className={drawerClasses}>
        <ul>{
            
            props.navList.map(item=>(<li><a href={item.path}>{item.title}</a></li>))
        }      

        </ul>
    </nav>
    )
};
export default sideDrawer;