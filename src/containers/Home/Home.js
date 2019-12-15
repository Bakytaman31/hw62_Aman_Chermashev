import React, {Component} from 'react';
import NavBar from "../../components/NavBar/NavBar";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <NavBar/>
                <div>
                    <h1>Welcome to the Palmer High School</h1>
                </div>
            </div>
        );
    }
}

export default Home;