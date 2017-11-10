import React, {Component} from "react";

class PlaceTemp extends Component{
    render(){
        return(
            <div className={`data-container cont-${this.props.cityData.name}`}>
                <h3> {this.props.cityData.name}, {this.props.cityData.sys.country}</h3>

                <div className="container-info">
                    <h4>Weather: {this.props.cityData.weather.main}</h4>
                    <h5>{this.props.cityData.weather.description}</h5>
                    <div className="temp">
                        <p>Actual temp: {this.props.cityData.main.temp}</p>
                        <p>Max: {this.props.cityData.main.temp_max}</p>
                        <p>Min: {this.props.cityData.main.temp_min}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaceTemp;