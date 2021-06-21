import { combineReducers } from "redux";
import GetVehiclesReducer from "./Vehicles/GetVehiclesReducer";
import ShowHideDataReducer from "./ShowHideData/ShowHideDataReducer";

const rootReducer = combineReducers({
  
  vehicles: GetVehiclesReducer,
  showData: ShowHideDataReducer
 
});

export default rootReducer;