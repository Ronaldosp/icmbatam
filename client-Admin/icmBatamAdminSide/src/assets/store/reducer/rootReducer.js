import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import adminReducer from "./adminReducer";

const rootReducer = combineReducers({
    eventReducer:eventReducer,
    adminReducer:adminReducer
})

export default rootReducer