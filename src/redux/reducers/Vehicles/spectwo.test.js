import VehiclesCount from "../../../components/VehicleData/VehicleData";
import {
    GET_VEHICLES_COUNT
  } from "../../../constants/constants";
import GetVehiclesReducer from './GetVehiclesReducer';

describe('Get Vehicles Count Reducer',() => {
      it('Should return default state',() => {
          const newState = GetVehiclesReducer(0,{});
          expect(newState).toEqual(0);
      });

      it('should return vehicle data',() => {
          const newState = GetVehiclesReducer(VehiclesCount,{
              type:GET_VEHICLES_COUNT,
              payload:VehiclesCount
          });
          expect(newState).toEqual(VehiclesCount);
      });
  })