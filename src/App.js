import React from "react";
import "./App.css";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SoulList from "./component/SoulList";
import Landing from "./component/Landing";

function App() {
  return (
    <Router>
      <Col>
        <Row>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/souls" component={SoulList} />
          </Switch>
        </Row>
      </Col>
    </Router>
  );
}

export default App;
