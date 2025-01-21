// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon

import { Component } from "react";

export default class Hero extends Component {
    render() {
        return (
            <div>
                <p className="hero-heading">Name: Satyam Bharat Warghat</p>
                <p>Email: warghatsatyam33@gmail.com</p>
                <p>Phone: +91 7045053925</p>
                <p>Address: Sindhu D Wing 415 Lokgram Kalyan(E) 421306</p>
            </div>
        )
    }
}