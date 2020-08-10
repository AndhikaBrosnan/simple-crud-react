import React from "react";
import Button from "react-bootstrap/Button";

const Soul = props => {

    return (

        <div className="row">
            <div className="col-10">{props.item}</div>
            {/*<Button variant="warning" className="mr-2 ml-2" size="sm">Edit</Button>*/}
            <Button variant="danger" className=" mr-2 ml-2" size="sm"
                    onClick={() => props.deleteSoul(props.item)}>Delete</Button>

        </div>
    )
}

export default Soul;

