import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const reducer = (state, action) => {
	if (action.type === "SAVE_DATA"){
		return{
			...state,
			historyData: {...state.historyData, }
		}
	}
    else if (action.type === "LOAD_TEMP_DATA"){
    	return {
			...state,
			tempData: action.tempData
      	}
    }
    return state;
};

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export default createStore(reducer, {tempData: [], historyData: {}}, applyMiddleware(thunk, logger));