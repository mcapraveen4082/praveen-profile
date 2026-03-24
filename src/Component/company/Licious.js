/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';
import '../../css/licious.css';

class Licious extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="card">
                <h2><strong>Company: </strong> Licious</h2>
                <p><strong>Industry:</strong> Food Tech / E-commerce</p>
                <p><strong>Role:</strong> Frontend / Fullstack Engineer</p>
                <p><strong>Timeline:</strong> Sep-2017 - Feb-2019</p>
                <p><strong>Team Setup:</strong> Product Manager, Frontend Squad, Backend Squad, QA, Growth Team</p>
                <p><strong>Technologies Used:</strong> React.js, JavaScript, Laravel, REST APIs, HTML, CSS, Payment Gateway Integrations</p>
                <p><strong>Domain Ownership:</strong> Product browsing, checkout funnel, payment integration, and conversion-focused campaign modules</p>
                <p><strong>Business Impact:</strong> Improved purchase journey reliability and reduced checkout friction for high-intent customers.</p>
                <p><strong>Key Deliverables:</strong></p>
                <ul>
                    <li>
                        <b>Product Listing Experience:</b>
                        <p>Built product listing modules with pricing, availability, SKU-level metadata, and category-driven discoverability for smoother browsing.</p>
                    </li>
                    <li>
                        <b>Checkout Flow:</b>
                        <p>Developed checkout journey for cart review, address capture, and payment flow orchestration with improved UX consistency.</p>
                    </li>
                    <li>
                        <b>Paytm Payment Gateway:</b>
                        <p>Integrated gateway APIs for payment initiation, callbacks, and transaction state handling to improve payment success reliability.</p>
                    </li>
                    <li>
                        <b>Coupons & Referral Programs:</b>
                        <p>Implemented campaign-ready coupon and referral modules with validation logic, reward handling, and admin-driven campaign management.</p>
                    </li>
                    <li>
                        <b>Senior Engineering Contributions:</b>
                        <p>Collaborated with growth and product teams on A/B experimentation inputs, participated in peer code reviews, and improved feature rollout quality.</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Licious;