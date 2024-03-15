/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';
import '../../css/vyapar.css';

class Vyapar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div class="card">
                <h2><strong>Industry: </strong> Vyapar App</h2>
                <p><strong>Technologies Used:</strong> React.js, Nest.js, Next.js, Laravel, HTML, CSS</p>
                <p><strong>Features Developed:</strong></p>
                <ul>
                     <li>
                        <b>Calling Support Internal Dashboard: </b>  
                        <p>Integrate calling support into the dashboard to allow agents to make calls directly from the dashboard. Additionally, automate lead assignment based on predefined rules. Log call details (such as call duration, timestamp, and caller ID) in the dashboard for future reference. Provide users with access to their call history, including details of past calls made from the dashboard</p>
                        <p>Define rules for automatically assigning leads to agents based on criteria such as lead source, location, or lead score.</p>
                    </li>
                    <li>
                        <b>Distributor Commission: </b>  
                        <p>Automate the process of calculating distributor commissions based on sales data and facilitate payment to distributors. Provide a reporting mechanism to view commission details and statements.</p>
                        <p>Define a payment schedule (e.g., weekly, monthly) for distributing commissions to distributors</p>
                        <p></p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Vyapar;