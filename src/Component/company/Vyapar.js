/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';
import '../../css/vyapar.css';

class Vyapar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="card">
                <h2><strong>Company: </strong> Simply Vyapar Apps Pvt Ltd</h2>
                <p><strong>Industry:</strong> SMB FinTech / Accounting SaaS</p>
                <p><strong>Role:</strong> Senior Fullstack Engineer</p>
                <p><strong>Timeline:</strong> March-2019 - Present</p>
                <p><strong>Team Setup:</strong> Product Manager, 2 Backend Engineers, 2 Frontend Engineers, QA, Support Ops</p>
                <p><strong>Technologies Used:</strong> React.js, Next.js, NestJS, Node.js, Laravel, MySQL, Redis, AWS, Docker</p>
                <p><strong>Domain Ownership:</strong> Support CRM flows, lead assignment automation, commissions lifecycle, reporting dashboards</p>
                <p><strong>Business Impact:</strong> Reduced manual operations, improved support response times, and increased commission processing accuracy.</p>
                <p><strong>Key Deliverables:</strong></p>
                <ul>
                     <li>
                        <b>Calling Support Internal Dashboard:</b>
                        <p>Integrated click-to-call workflows for support agents directly from the dashboard, with call metadata logging (duration, timestamp, caller details) and searchable call history.</p>
                        <p>Implemented rule-based lead assignment by source, geography, and priority to reduce manual routing overhead.</p>
                    </li>
                    <li>
                        <b>Distributor Commission Engine:</b>
                        <p>Automated commission calculations based on sales slabs, partner rules, and settlement windows; added monthly statements and reconciliation reporting.</p>
                        <p>Built scheduled settlement support (weekly/monthly) with audit-ready ledger references for finance operations.</p>
                    </li>
                    <li>
                        <b>Architecture & Quality Improvements:</b>
                        <p>Standardized API contracts between frontend and backend modules, introduced modular service boundaries, and improved release confidence via staged QA validation.</p>
                    </li>
                    <li>
                        <b>Senior Engineering Contributions:</b>
                        <p>Led code reviews, mentored junior developers, and partnered with product/support teams to prioritize high-impact roadmap items.</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Vyapar;