import React from "react";

import PlaceTemp from "./PlaceTemp.component.jsx";

import {connect} from "react-redux";

const Main = ({data}) => {
        return (
            <div className="main-container">
                {data.map( cityData => {
                    return <PlaceTemp cityData={cityData} />
                })}
            </div>
        )
}

const mapStateToProps = state => {
    return {
        data: state.tempData,
    }
}

export default connect(mapStateToProps)(Main);
