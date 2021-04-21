import React, { Component } from "react"
import logo from './mit.jpg';
import "./photo.css";

class Home extends Component {
    
    render() {
        return (
            <div className="container" key={this.props.name}>
                
                    <img src={logo} alt="MIT"/>
                    <div className="column-right">
                    <h1>Hello, I'm Mitkumar Patel</h1>
                    <p>I'm Student of Master of Science Computing and Data Analysis at <a href='https://www.smu.ca'>Saint Mary's University</a>.
                        I have completed my B.Tech in September 2020 from <strong>India</strong>.
                    </p>

                    <p>
                        <ul>
                            <li>
                            I have applied for MCDA because I love extracting pattern from the data.
                            </li>
                            <li>
                            I wanna learn new techniques using which I can do data mining effectively.
                            </li>
                            <li>
                            To know more about Artificial Intelligence and use my interpersonal skills to solve real world problems.
                            </li>
                        </ul>
                    </p>
                    </div>

            </div>
        )
    }
}

export default Home;
