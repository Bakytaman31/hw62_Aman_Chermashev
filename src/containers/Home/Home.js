import React, {Component} from 'react';
import NavBar from "../../components/NavBar/NavBar";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <NavBar/>
                <div>
                    <h1>Welcome to the Palmer High School</h1>
                    <img src="https://www.matsuk12.us/cms/lib/AK01000953/Centricity/Domain/2959/PHS%20Moose.png"/>
                </div>
            </div>
        );
    }
}

export default Home;