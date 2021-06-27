import {
    GET_VEHICLES
  } from "../../../constants/constants";
  import { getVehicles } from "../../../lib/api/vehicles";
  
  export const GetVehiclesAction = (page, rowsPerPage) => {
    return function action(dispatch) {
      getVehicles(page, rowsPerPage)
        .then((data) => {
          dispatch(GetVehiclesSuccessAction(data));
        })
    };
  };
  
  export function GetVehiclesSuccessAction(vehicleList) {
    return {
      type: GET_VEHICLES,
      payload: vehicleList
    };
  }
  