import { combineReducers } from "redux";

import itemsreducer from "./items";

const rootReducer = combineReducers({
  itemState: itemsreducer
});

export default rootReducer;
