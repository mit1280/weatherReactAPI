import React, { Component } from "react"
import logo from './hali.jpg';
import logo1 from './sunny.png';
import logo2 from './cold.png';
import logo3 from './mild.png';
import "./photo.css";
//const temp =Math.floor(Math.random()* (max - min) + min)

class Town extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isCalsius: true
            ,temprature:''
        }
        this.fetchData = this.fetchData.bind(this);
    }
    fetchData() {



    fetch("http://api.openweathermap.org/data/2.5/weather?q=Halifax,ca&APPID=2601d0e978b0b42faca3372a8b9f9db5")
    .then(response => {
        return response.json()
    })
    .then(response => {
        // console.log(response);
        this.setState({
            temprature: response.main.temp-273.15
        })
    });




    }

    componentDidMount() {
        this.fetchData()
    }
    render() {
        return (
            <div className="container" key={this.props.name}>
                
                    
                <img src={logo} alt="Logo" />
                <div>
                <h3 className="column-right">I'm living in Halifax for Study. I'm from Anand, Gujarat, India.</h3>

<p className="column-right">Halifax has a humid continental climate (Köppen Dfb), bordering on an oceanic climate (Cfb),
    with warm summers and relatively mild winters, which is due to Gulf Stream moderation.
    The weather is usually milder in the winter or cooler in the summer than areas at similar latitudes inland,
    with the temperature remaining (with occasional notable exceptions) between
    about −8 and 24 °C (18 and 75 °F).[19] January is the coldest month,
    being the only month with a high that is slightly below freezing at −0.1 °C (31.8 °F),
    while August is the warmest. The sea heavily influences the climate of the area,
    causing significant seasonal lag in summer, with August being significantly warmer than June and with September being the third mildest month in terms of mean temperature.[20]
    The January mean is only 1.1 °C (2.0 °F) colder than the isotherm for the oceanic climate.
    </p>
                
                    
              
               <p>
                        <b>Temprature</b> of <i><b>Halifax</b>, <u>Canada</u></i> is displayed below
                    </p>
                    {(this.state.temprature<=10)?
                    <img className="Photo" src={logo2} alt="Cold" weight='100'/>
                    :
                    (this.state.temprature<20)?
                    <img className="Photo" src={logo3} alt="Mild" weight='100'/>       
                    :
                    <img className="Photo" src={logo1} alt="Sunny" weight='100'/>
                    }
                    <div className="next">
                    <b>Temprature:</b>
                    {this.state.isCalsius 
                    ?
                        Math.round(this.state.temprature*100)/100+"°C "
                        :
                        Math.round((9/5*this.state.temprature+32)*100)/100+"°F "
                        }
                    <button onClick={() => this.setState({ isCalsius: !this.state.isCalsius })}
                    className={this.state.isCalsius ? "btn-capital-hide" : "btn-capital-show"}>
                    {this.state.isCalsius ? "Show Fahrenheit" : "Show Celsius"}
                </button>
               </div>
                    
                    </div>
            </div>
        )
    }
}
export default Town;