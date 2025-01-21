// Create Skill component here to display your skills
// In this component there should be a list with each listitem as your skill.
import { Component } from "react";

export default class Skills extends Component {
    render() {
        return (
            <div>
                <h1>Skills</h1>
                <ul>
                    <li>React</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>BootStrap</li>
                </ul>
            </div>
        )
    }
}