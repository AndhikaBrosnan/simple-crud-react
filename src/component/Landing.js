import React from 'react';
import '../App.css';
import Button from "react-bootstrap/Button";

class Landing extends React.Component{

    btnClick = () => {
        window.open("/souls");
    };

    render() {
        return(
            <div className="App" style = {{width:"100"}}>
                <header className="App-header">
                    <img src={process.env.PUBLIC_URL + 'omenlogo.png'} style={{height:300}} className="App-logo" alt="logo" />
                    <h3 className="">
                        You've chosen to enter the Portal
                    </h3>
                    <Button type="button" onClick={()=>this.btnClick() } variant="dark" style={{ width: 100, marginTop: 10 }}>Enter</Button>{' '}
                </header>
            </div>
        );
    }

}
export default Landing;