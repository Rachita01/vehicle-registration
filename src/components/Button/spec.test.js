import React from 'react';
import {shallow} from 'enzyme';
import { ShowHideButton } from './ShowHideButton';
import {findByTestAttribute} from './../../Utils';


const setUp = (props={}) => {
    const component = shallow(<ShowHideButton {...props}/>);
    console.log(component);
    return component;
};


describe('Button Component',() => {

    let component;
    // let mockFunc;
    beforeEach(() => {
        // mockFunc = jest.fn();
        // const props = {
        //     buttonText: 'Show',
        //     emitEvent: mockFunc
        //     }
        component = setUp();
    });

    it('Button div should render without error', () => {
        const wrapper = findByTestAttribute(component,'showHidebuttons');
        expect(wrapper.length).toEqual(1);
    });
    it('Button Component should render without error', () => {
        const wrapper = findByTestAttribute(component,'buttonComponent');
        expect(wrapper.length).toEqual(1);
    });
    // it('Should emit click event',() => {
    //     const button = findByTestAttribute(component,'buttonComponent');
    //     button.simulate('click');
    //     const callback = mockFunc.mock.calls.length;
    //     expect(callback).toBe(1);
    // })
})