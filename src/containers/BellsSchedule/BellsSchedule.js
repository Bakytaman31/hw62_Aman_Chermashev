import React, {Component} from 'react';
import NavBar from "../../components/NavBar/NavBar";

class BellsSchedule extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>Bells Schedule</h1>
                <table border='1' height="70%" width="35%" style={{margin: '0 auto'}}>
                    <tr>
                        <td>1</td>
                        <td>7:30-8:15</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>8:25-9:10</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>9:20-10:05</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>10:15-11:00</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>11:10-11:55</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>12:00-12:45</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>12:50-13:35</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default BellsSchedule;