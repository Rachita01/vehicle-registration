import { combineReducers } from "redux";
import GetVehiclesReducer from "./Vehicles/GetVehiclesReducer";
import ShowHideDataReducer from "./ShowHideData/ShowHideDataReducer";
import GetVehiclesCountReducer from "./Vehicles/GetVehiclesCountReducer";

const rootReducer = combineReducers({
  
  vehicles: GetVehiclesReducer,
  showData: ShowHideDataReducer,
  vehiclesCount: GetVehiclesCountReducer
 
});

export default rootReducer;