import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import {Route, BrowserRouter as Router, Switch, Link, PropsRoute} from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup'
import Tabs from 'react-bootstrap/Tabs'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import NavLink from 'react-bootstrap/NavLink'
import FormControl from 'react-bootstrap/FormControl'

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
import {UserProvider} from "./Components/userContext";
import ComponentC from "./Components/ComponentC";
import FragmentDemo from "./Components/FragmentDemo";
import PortalParent from "./Components/PortalParent";

import './App.css';
import UserList from "./Components/UserList";
import HigherOrderComponent from "./Components/HigherOrderComponent";
function App() {
    return (
        <div className="App">
        <Router >
            <Navbar  expand="lg"  bg="info" variant="dark" >
                <Navbar.Brand href="#home">My Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                        <NavLink as={Link} to="/UserList">User API</NavLink>
                        <Nav.Link as={Link}  to="/GreetFunctionComponent">Home </Nav.Link>
                        <Nav.Link as={Link}  to="/WelcomeClassComponent">Link</Nav.Link>
                        <NavLink as={Link} to="/GreetFunctionComponent">See Function Component Greetings</NavLink>
                        <NavLink as={Link} to="/WelcomeClassComponent">See Class Component Welcome</NavLink>
                        <NavLink as={Link} to="/StateExampleComponent">Change State Example With Subscribe Button</NavLink>
                        <NavLink as={Link} to="/SetStateCounter">Counter Using Set State and Previous State !!</NavLink>
                        <NavDropdown title="Important Links"  id="collasible-nav-dropdown" >
                            <NavLink as={Link} to="/EventBindInClassComponent">Event Bind In Class Component</NavLink>
                            <NavDropdown.Divider />
                            <NavLink as={Link} to="/AccessFunctionParentComponentFromChildComponent">
                                Access Function f Parent Component From Child Component
                            </NavLink>
                            <NavDropdown.Divider />
                            <NavLink as={Link} to="/ListRenderingComponent">
                                List Rendering By Creating Single Component as Person and Re using It in Person List
                            </NavLink>
                            <NavDropdown.Divider />
                            <NavLink as={Link} to="/Form"> Form Elements </NavLink>
                            <NavLink as={Link} to="/LifeCycleA">Check Order of Mounting Phase Method</NavLink>
                            <NavLink as={Link} to="/FragmentDemo">Fragment Demo, Use &lt;&gt; &lt;/&gt; </NavLink>
                            <NavLink as={Link} to="/PortalParent">Portal Demo with Modal</NavLink>
                            <NavLink as={Link} to="/HOCExample">HOC Example </NavLink>
                            <NavLink as={Link} to="/ContextApi">Context Api </NavLink>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="myAppRoutes">

                <Switch>
                    <Route path="/GreetFunctionComponent" children={<Greet name={"Vaibhav"}/>}></Route>
                    <Route path="/WelcomeClassComponent" component={Welcome}></Route>
                    <Route path="/StateExampleComponent" component={Message}></Route>
                    <Route path="/SetStateCounter" component={Counter}></Route>
                    <Route path="/EventBindInClassComponent" component={EventBind}></Route>
                    <Route path="/AccessFunctionParentComponentFromChildComponent" component={ParentComponent}></Route>
                    <Route path="/ListRenderingComponent" component={NameList}></Route>
                    <Route path="/Form" component={Form}></Route>
                    <Route path="/LifeCycleA" component={LifeCycleA}></Route>
                    <Route path="/FragmentDemo" component={FragmentDemo}></Route>
                    <Route path="/PortalParent" component={PortalParent}></Route>
                    <Route path="/HOCExample" component={ClickCounter}></Route>
                    <Route path="/ContextApi" component={ComponentC}></Route>
                    <Route path="/UserList" component={UserList}></Route>



                </Switch>
                {/*<Greet name="vaibhav"></Greet>*/}
                {/*     <Greet name="tushar"></Greet>*/}
                {/*     <Welcome></Welcome>*/}
                {/*     <Message></Message>*/}
                {/*     <Counter></Counter>*/}
                {/*<EventBind></EventBind>*/}
                {/*<FunctionClick></FunctionClick>*/}
                {/*     <ClassClick></ClassClick>*/}
                {/*     <ParentComponent></ParentComponent>*/}
                {/*     <NameList></NameList>*/}
                {/*  <Form></Form>*/}
                {/*<LifeCycleA></LifeCycleA>*/}
                {/*<PureComp></PureComp>*/}
                {/*<RefsDemo></RefsDemo>*/}
                {/*<ClickCounter></ClickCounter>*/}
                {/*<UserProvider value="Vaibhav"> <ComponentC></ComponentC>  </UserProvider>*/}


            </div>
        </Router>
        <HigherOrderComponent></HigherOrderComponent>
        </div>
    );
}

export default App;
