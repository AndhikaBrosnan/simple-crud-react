import React from 'react';
import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SoulList from "./component/SoulList";
import Landing from "./component/Landing";

function App() {
    const marginTop = {
        marginTop: "0px"
    };
    return (
        <Router className="App-header">
            <Container >
                <Row>
                    <Col lg={12} style={marginTop}>
                        <Switch>
                            <Route exact path="/" component={Landing}/>
                            <Route path="/souls" component={SoulList}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
  );
}

export default App;
