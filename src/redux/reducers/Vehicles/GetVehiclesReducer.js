import {
  GET_VEHICLES
} from "../../../constants/constants";

const GetVehiclesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_VEHICLES:
      return action.payload;
    default:
      return state;
  }
};

export default GetVehiclesReducer;