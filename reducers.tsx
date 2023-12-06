import { combineReducers } from "redux";
import { axis } from "./axis/reducers";

const reducers = combineReducers({
   axis: axis,
});

export default reducers;
