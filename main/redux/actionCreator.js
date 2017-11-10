function apiCall(dispatch) {
    // Call to API
    fetch("http://api.openweathermap.org/data/2.5/group?id=3936456,3871336,7521912,6693229&units=metric&appid=4cdc12514e4533c3bd4727bce94ce099")
        .then( response => response.json() )
        .then( data => {
            //Once we get the data, we save it and load it on our application

            // dispatch({
            //     type: "SAVE_DATA",
            //     histData: data.list
            // })

            dispatch({
                type: "LOAD_TEMP_DATA",
                tempData: data.list
            })

        })
}

const loadPlaceTemp = () => {
    //Returns a function so it can be async
    return dispatch => {
        //First call
        apiCall(dispatch);
        //Call every 3 minutes
        setInterval( () => {
            apiCall(dispatch);
        }, 5000)
    }
}

export default loadPlaceTemp;