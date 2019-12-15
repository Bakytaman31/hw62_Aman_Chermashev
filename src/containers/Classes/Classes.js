import React, {Component} from 'react';
import NavBar from "../../components/NavBar/NavBar";

class Classes extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>Classes</h1>
                <table border="1" style={{margin: '0 auto', padding: '0'}} width="25%">
                    <tr>
                        <td>Algebra</td>
                    </tr>
                    <tr>
                        <td>Geometry</td>
                    </tr>
                    <tr>
                        <td>English</td>
                    </tr>
                    <tr>
                        <td>History</td>
                    </tr>
                    <tr>
                        <td>Gym</td>
                    </tr>
                    <tr>
                        <td>Chemistry</td>
                    </tr>
                    <tr>
                        <td>Physics</td>
                    </tr>
                    <tr>
                        <td>Biology</td>
                    </tr>
                    <tr>
                        <td>Geography</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Classes;