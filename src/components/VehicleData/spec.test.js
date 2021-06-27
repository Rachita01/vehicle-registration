jest.mock('./../../lib/api/vehicles');
import {configure,shallow} from 'enzyme';
import React from 'react';
import { GetVehiclesSuccessAction } from '../../redux/actions/Vehicles/GetVehiclesAction';
import { GetVehiclesCountSuccessAction } from '../../redux/actions/Vehicles/GetVehiclesCountAction';
import Adapter from "enzyme-adapter-react-16";
import * as ReactReduxHooks from "./../ReactReduxHooks/react-redux-hooks";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState } from './../../constants/constants';
import { GET_VEHICLES } from './../../constants/constants';
import { GET_VEHICLES_COUNT } from './../../constants/constants';
import * as API from './../../lib/api/vehicles';

configure({adapter: new Adapter()});
const mockStore = configureStore([thunk]);
describe("Vehicle Data",() => {
    
    let store;
    beforeEach(() => {
        store = mockStore(initialState);
    });

    test('Get vehicle data action',() => {
        const vehicleList = 'vehicles';
        const actual = GetVehiclesSuccessAction(vehicleList);
        const expected = {type:GET_VEHICLES,payload:vehicleList};
        expect(actual).toEqual(expected);
    });

    test('Get vehicle count action',() => {
        const vehicleCount = 'count';
        const actual = GetVehiclesCountSuccessAction(vehicleCount);
        const expected = {type:GET_VEHICLES_COUNT,payload:vehicleCount};
        expect(actual).toEqual(expected);
    });

 
});