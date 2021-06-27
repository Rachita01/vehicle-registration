
import VehiclesData from "../../../components/VehicleData/VehicleData";
import {
    GET_VEHICLES
  } from "../../../constants/constants";
import GetVehiclesReducer from './GetVehiclesReducer';

describe('Get Vehicles Reducer',() => {
      it('Should return default state',() => {
          const newState = GetVehiclesReducer([],{});
          expect(newState).toEqual([]);
      });

      it('should return vehicle data',() => {
          const newState = GetVehiclesReducer(VehiclesData,{
              type:GET_VEHICLES,
              payload:VehiclesData
          });
          expect(newState).toEqual(VehiclesData);
      });
  })