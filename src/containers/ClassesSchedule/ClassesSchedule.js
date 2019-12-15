import React, {Component} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import "./ClassesSchedule.css"

class ClassesSchedule extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>Classes Schedule</h1>
                <div className="Tables">
                    <table border='1px'>
                        <h4>Monday</h4>
                        <tr><td>1.Algebra</td></tr>
                        <tr><td>2.Geometry</td></tr>
                        <tr><td>3.History</td></tr>
                        <tr><td>4.Gym</td></tr>
                        <tr><td>5.Physics</td></tr>
                    </table>
                    <table border='1px'>
                        <h4>Tuesday</h4>
                        <tr><td>1.History</td></tr>
                        <tr><td>2.Chemistry</td></tr>
                        <tr><td>3.Gym</td></tr>
                        <tr><td>4.Gym</td></tr>
                        <tr><td>5.Geometry</td></tr>
                        <tr><td>6.Algebra</td></tr>
                        <tr><td>7.Algebra</td></tr>
                    </table>
                    <table border='1px'>
                        <h4>Wednesday</h4>
                        <tr><td>1.English</td></tr>
                        <tr><td>2.Chemistry</td></tr>
                        <tr><td>3.Biology</td></tr>
                        <tr><td>4.Geography</td></tr>
                    </table>
                    <table border='1px'>
                        <h4>Thursday</h4>
                        <tr><td>1.Algebra</td></tr>
                        <tr><td>2.English</td></tr>
                        <tr><td>3.Gym</td></tr>
                        <tr><td>4.Physics</td></tr>
                        <tr><td>5.History</td></tr>
                        <tr><td>6.Chemistry</td></tr>
                    </table>
                    <table border='1px'>
                        <h4>Friday</h4>
                        <tr><td>1.Algebra</td></tr>
                        <tr><td>2.Geometry</td></tr>
                        <tr><td>3.History</td></tr>
                        <tr><td>4.Gym</td></tr>
                        <tr><td>5.Physics</td></tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default ClassesSchedule;