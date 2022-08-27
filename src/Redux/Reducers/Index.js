import counterReducer from "./CounterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counterReducer,
})

export default rootReducer