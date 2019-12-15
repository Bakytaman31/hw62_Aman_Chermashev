import React from 'react';
import NavBar from "../../components/NavBar/NavBar";

const Teachers = () => {
    return (
        <div>
            <NavBar/>
            <h1>Teachers</h1>
            <table border="1" style={{margin: '0 auto'}} width="35%">
                <tr>
                    <td>Algebra</td>
                    <td>Mr Smith</td>
                </tr>
                <tr>
                    <td>Geometry</td>
                    <td>Mr Smith</td>
                </tr>
                <tr>
                    <td>English</td>
                    <td>Mrs Beck</td>
                </tr>
                <tr>
                    <td>History</td>
                    <td>Mr Baker</td>
                </tr>
                <tr>
                    <td>Gym</td>
                    <td>Mr Galahad</td>
                </tr>
                <tr>
                    <td>Chemistry</td>
                    <td>Ms Craig</td>
                </tr>
                <tr>
                    <td>Physics</td>
                    <td>Mr Johnson</td>
                </tr>
                <tr>
                    <td>Biology</td>
                    <td>Mrs Cooper</td>
                </tr>
                <tr>
                    <td>Geography</td>
                    <td>Mrs McKenzy</td>
                </tr>
            </table>
        </div>
    );
};

export default Teachers;