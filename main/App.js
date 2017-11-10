import React from "react";
import ReactDOM from "react-dom";

import Main from "./components/Main.component.jsx";

import {Provider} from "react-redux";
import store from "./redux/store.js"

import loadPlaceTemp from "./redux/actionCreator";

store.dispatch( loadPlaceTemp() );

ReactDOM.render(<Provider store={store}>
                    <Main/>
                </Provider>, document.getElementById("container"));