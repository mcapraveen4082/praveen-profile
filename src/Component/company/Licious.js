/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';
import '../../css/licious.css';

class Licious extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div class="card">
                <h2><strong>Industry: </strong> Licious</h2>
                <p><strong>Technologies Used:</strong> React.js, Javascript, Laravel, HTML, CSS</p>
                <p><strong>Features Developed:-</strong></p>
                <ul>
                    <li>
                        <b>Product Listing Page: </b>  
                        <p>The product listing page should display detailed information about the product. Users should be able to view the product name, price, description, and other relevant details.</p>
                    </li>
                    <li>
                        <b>Product Checkout Page: </b> 
                        <p>The checkout page should allow users to review their selected products, enter their shipping and payment information, and complete the purchase process.</p> 
                    </li>
                    <li>
                        <b>Paytm Payment Gateway: </b>  
                        <p>Integrate the Paytm payment gateway into the application to allow users to make payments using the Paytm platform. Use the Paytm provided SDK or API to generate the payment request and initiate the payment flow.</p>
                    </li>
                    <li>
                        <b>Coupons & Referral: </b>  
                        <p>Implement a system for users to redeem coupons and refer friends to the platform, rewarding both the referrer and the referee. Allow admins to generate unique coupon codes with specific discounts or benefits</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Licious;