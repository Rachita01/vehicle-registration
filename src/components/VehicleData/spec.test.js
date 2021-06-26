import {shallow} from 'enzyme';
import React from 'react';
import VehicleData from "./VehicleData";
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {findByTestAttribute} from './../../Utils';
const mockStore = configureMockStore([thunk]);
describe('Given Vehicle Data',() => {
    const store = mockStore();
    test("Then Material table should be rendered", () => {
        const component = shallow(<Provider store={store}><VehicleData></VehicleData></Provider>).childAt(0);
        console.log(component.debug());
        const materialTable = findByTestAttribute(component,'dataTable').exists(); 
        expect(materialTable).toBe(true);
        
    });
})

// import React from 'react';
// import {Provider} from 'react-redux'
// import { mount, shallow } from 'enzyme'
// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk';
// import VehicleData from "./VehicleData";

// const mockStore = configureMockStore([thunk]);

// describe('App', () => {
//   it('should render a startup component if startup is not complete', () => {
//     const store = mockStore({
//       startup: { complete: false }
//     });
//     const wrapper = shallow(
      
//         <VehicleData />
        
//     )
//     expect(wrapper.find('Startup').length).toEqual(1)
//   })
// })