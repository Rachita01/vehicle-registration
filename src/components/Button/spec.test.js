import React from 'react';
import {shallow} from 'enzyme';
import { ShowHideButton } from './ShowHideButton';
import {findByTestAttribute} from './../../Utils';


const setUp = (props={}) => {
    const component = shallow(<ShowHideButton {...props}/>);
    return component;
};


describe('Button Component',() => {
    
    let component;
    beforeEach(() => { 
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
    
})