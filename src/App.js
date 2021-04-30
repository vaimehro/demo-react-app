import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, BrowserRouter as Router, Switch, Link, PropsRoute } from "react-router-dom";
import {Nav, NavDropdown, Navbar, NavLink, NavItem, Container,FormControl,Button,Toast} from "react-bootstrap";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent";
import NameList from "./Components/NameList";
import Form from "./Components/Form";
import LifeCycleA from "./Components/LifeCycleA";
import PureComp from "./Components/PureComp";
import RefsDemo from "./Components/RefsDemo";
import ClickCounter from "./Components/ClickCounter";
import {UserProvider} from "./Components/userContext";
import ComponentC from "./Components/ComponentC";
import FragmentDemo from "./Components/FragmentDemo";
import PortalParent from "./Components/PortalParent";
import OrgSideBar from "./Components/OrgSideBar";
import './App.css';
import UserList from "./Components/UserList";
import HigherOrderComponent from "./Components/HigherOrderComponent";
import ProjectToastComponent from "./Components/CommonComponent/ProjectToastComponent";
import TodoList from "./Components/TodoList";

function App() {
    return (
        <div className="App">





            <Router>

                <Container className={"container"}>
                    <div className="sidebar-container">
                        <div className="sidebar-logo">
                            Project Name
                        </div>
                        <ul className="sidebar-navigation">
                            <li className="header">Navigation</li>
                            <li>
                                <a href="TodoList">
                                    <i className="fa fa-home" aria-hidden="true"></i> MY ACTIVITIES
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard
                                </a>
                            </li>
                            <li className="header">Another Menu</li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-users" aria-hidden="true"></i> Friends
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-cog" aria-hidden="true"></i> Settings
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-info-circle" aria-hidden="true"></i> Information
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/*<Navbar collapseOnSelect bg="dark" variant="dark">*/}
                    {/*    <Navbar.Brand href="#home">My Site</Navbar.Brand>*/}
                    {/*    <Navbar.Toggle aria-controls="basic-navbar-nav"/>*/}

                    {/*    <Navbar.Collapse id="basic-navbar-nav" >*/}
                    {/*        <Nav fill variant="tabs" className="mr-auto">*/}
                    {/*            <NavLink as={Link} to="/UserList">User API</NavLink>*/}
                    {/*            <Nav.Link as={Link}  to="/GreetFunctionComponent">Home </Nav.Link>*/}
                    {/*            <Nav.Link as={Link}  to="/WelcomeClassComponent">Link</Nav.Link>*/}
                    {/*            <NavLink as={Link} to="/GreetFunctionComponent">See Function Component Greetings</NavLink>*/}
                    {/*            <NavLink as={Link} to="/WelcomeClassComponent">See Class Component Welcome</NavLink>*/}
                    {/*            <NavLink as={Link} to="/StateExampleComponent">Change State Example With Subscribe Button</NavLink>*/}
                    {/*            <NavLink as={Link} to="/SetStateCounter">Counter Using Set State and Previous State !!</NavLink>*/}
                    {/*            <NavDropdown title="Important Links"  id="collasible-nav-dropdown" >*/}
                    {/*                <NavLink as={Link} to="/EventBindInClassComponent">Event Bind In Class Component</NavLink>*/}
                    {/*                <NavDropdown.Divider />*/}
                    {/*                <NavLink as={Link} to="/AccessFunctionParentComponentFromChildComponent">*/}
                    {/*                    Access Function f Parent Component From Child Component*/}
                    {/*                </NavLink>*/}
                    {/*                <NavDropdown.Divider />*/}
                    {/*                <NavLink as={Link} to="/ListRenderingComponent">*/}
                    {/*                    List Rendering By Creating Single Component as Person and Re using It in Person List*/}
                    {/*                </NavLink>*/}
                    {/*                <NavDropdown.Divider />*/}
                    {/*                <NavLink as={Link} to="/Form"> Form Elements </NavLink>*/}
                    {/*                <NavLink as={Link} to="/LifeCycleA">Check Order of Mounting Phase Method</NavLink>*/}
                    {/*                <NavLink as={Link} to="/FragmentDemo">Fragment Demo, Use &lt;&gt; &lt;/&gt; </NavLink>*/}
                    {/*                <NavLink as={Link} to="/PortalParent">Portal Demo with Modal</NavLink>*/}
                    {/*                <NavLink as={Link} to="/HOCExample">HOC Example </NavLink>*/}
                    {/*                <NavLink as={Link} to="/ContextApi">Context Api </NavLink>*/}

                    {/*            </NavDropdown>*/}
                    {/*        </Nav>*/}
                    {/*    </Navbar.Collapse>*/}
                    {/*</Navbar>*/}

                    <div className="content-container shadow-lg p-3 mb-5 bg-white rounded">

                        <div className="container-fluid">

                            <Switch>
                                <Route path="/GreetFunctionComponent" children={<Greet name={"Vaibhav"}/>}></Route>
                                <Route path="/TodoList" component={TodoList}></Route>
                                <Route path="/StateExampleComponent" component={Message}></Route>
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

                            </Switch>


                        </div>
                    </div>
                </Container>

            </Router>
            <HigherOrderComponent></HigherOrderComponent>





        </div>
    );
}

export default App;
