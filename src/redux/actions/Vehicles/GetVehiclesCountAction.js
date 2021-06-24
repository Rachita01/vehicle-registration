import {
    GET_VEHICLES_COUNT
  } from "../../../constants/constants";
  import { getVehiclesCount } from "../../../lib/api/vehicles";
  
  export const GetVehiclesCountAction = () => {
    return function action(dispatch) {
      getVehiclesCount()
        .then((data) => {
          dispatch(GetVehiclesCountSuccessAction(data));
        })
    };
  };
  
  export function GetVehiclesCountSuccessAction(vehicleCount) {
    return {
      type: GET_VEHICLES_COUNT,
      payload: vehicleCount,
    };
  }
  