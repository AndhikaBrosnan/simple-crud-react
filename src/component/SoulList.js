import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Soul from "./Soul";
import { Form } from "react-bootstrap";

class SoulList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      nama: ["Brosnan", "Valdy", "Richard", "Puppy", "Wew"],
    };
  }
  //TODO: kenapa on change belum di set udah keubah di statenya
  deleteSoul = (jiwa) => {
    const soul = this.state.nama.filter((nama) => {
      return jiwa !== nama;
    });
    this.setState({ nama: soul });
  };

  addSoul = () => {
    this.state.nama.push(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  onChangeSoul = (event) => {
    this.setState({ inputValue: event.target.value });
    console.log("event value: ", event.target.value);
    console.log("state inputvalue: ", this.state.inputValue);
  };

  render() {
    return (
      <div className="App">
        <h2 className="m-2">Soul List</h2>
        <Form className="text-right mt-5">
          <Form.Group>
            <Form.Control
              type="text"
              value={this.state.inputValue}
              placeholder="Input Soul Name"
              onChange={this.onChangeSoul}
            />
          </Form.Group>
          <Button type="button" variant="dark" onClick={this.addSoul}>
            Add Soul
          </Button>{" "}
        </Form>

        <div className="mt-3">
          <ListGroup>
            {this.state.nama.map((soul) => (
              <ListGroup.Item key={soul}>
                <Soul deleteSoul={this.deleteSoul} item={soul} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default SoulList;
