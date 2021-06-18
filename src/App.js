import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter as Router, Switch, Link, PropsRoute } from "react-router-dom";
import { Nav, NavDropdown, Navbar, NavLink, NavItem, Container, FormControl, Button, Toast, } from "react-bootstrap";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent.";
import NameList from "./Components/NameList";
import Form from "./Components/Form";
import LifeCycleA from "./Components/LifeCycleA";
import PureComp from "./Components/PureComp";
import RefsDemo from "./Components/RefsDemo";
import ClickCounter from "./Components/ClickCounter";
import { UserProvider } from "./Components/userContext";
import ComponentC from "./Components/ComponentC";
import FragmentDemo from "./Components/FragmentDemo";
import PortalParent from "./Components/PortalParent";
import OrgSideBar from "./Components/OrgSideBar";
import './App.css';
import UserList from "./Components/UserList";
import HigherOrderComponent from "./Components/HigherOrderComponent";
import ProjectToastComponent from "./Components/CommonComponents/ProjectToastComponent";
import TodoList from "./Components/TodoList";
import Toolbar from "./Components/Toolbar/Toolbar"
import SideDrawer from './Components/SideDrawer/SideDrawer';
import BackDrop from './Components/BackDrop/BackDrop';
import Person from './Components/Person';
import GlobalStyle from './Components/CommonComponents/StyledComponents/GlobalStyle';


function App() {


    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const drawerToggleClickHandler = () => {
        setSideDrawerOpen(sideDrawerOpen => !sideDrawerOpen);
    }
    const backDropClickHandler = () => {
        setSideDrawerOpen(false);
    }
    let backdrop;
    let sidebar;
    if (sideDrawerOpen) {
        backdrop = <BackDrop click={backDropClickHandler} />

    }

    const navList = [{ path: 'TodoList', title: 'My Activities' }, { path: 'UserList', title: 'People' }, { path: 'TodoList', title: 'Duplicate Activities' }, { path: 'Person', title: 'Add User' }]
    return (
        <div className="App" style={{ height: '100%' }}>
            <GlobalStyle />
            <Router>
                <SideDrawer show={sideDrawerOpen} navList={navList} />
                <Toolbar drawerClickHandler={drawerToggleClickHandler} />
                {sidebar}
                {backdrop}
                <div className="container">
                    <Switch>
                        {/* <Route path="/GreetFunctionComponent" children={<Greet name={"Vaibhav"}/>}></Route>*/}

                        <Route path="/TodoList" component={TodoList}></Route>

                        <Route path="/SetStateCounter" component={Counter}></Route>
                        <Route path="/EventBindInClassComponent" component={EventBind}></Route>
                        <Route path="/AccessFunctionParentComponentFromChildComponent"
                            component={ParentComponent}></Route>
                        <Route path="/ListRenderingComponent" component={NameList}></Route>
                        <Route path="/Form" component={Form}></Route>
                        <Route path="/LifeCycleA" component={LifeCycleA}></Route>
                        <Route path="/FragmentDemo" component={FragmentDemo}></Route>
                        <Route path="/PortalParent" component={PortalParent}></Route>
                        <Route path="/HOCExample" component={ClickCounter}></Route>
                        <Route path="/ContextApi" component={ComponentC}></Route>
                        <Route path="/UserList" component={UserList}></Route>
                        <Route path="/" component={Person}></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
