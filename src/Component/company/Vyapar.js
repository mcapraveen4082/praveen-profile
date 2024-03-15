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
                <h2>Company Name</h2>
                <p><strong>Industry:</strong> Industry Name</p>
                <p><strong>Technologies Used:</strong> React.js, Nest.js, AWS (EC2, RDS, S3, IAM, CloudWatch)</p>
                <p><strong>Features Developed:</strong></p>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>
            </div>
        );
    }
}

export default Vyapar;