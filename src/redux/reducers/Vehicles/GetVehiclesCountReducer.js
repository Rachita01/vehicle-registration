import {
    GET_VEHICLES_COUNT
  } from "../../../constants/constants";
  
  const GetVehiclesCountReducer = (state = 0, action) => {
    switch (action.type) {
      case GET_VEHICLES_COUNT:
        return action.payload;
      default:
        return state;
    }
  };
  
  export default GetVehiclesCountReducer;