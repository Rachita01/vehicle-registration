import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';
import { initialState, SHOW_DATA, HIDE_DATA } from './constants/constants';
import { ShowHideButton } from './components/Button/ShowHideButton';
import { ShowDataAction } from './redux/actions/ShowData/ShowDataAction';
import { HideDataAction } from './redux/actions/HideData/HideDataAction';
import rootReducer from './redux/reducers';
import {render} from "@testing-library/react";

Enzyme.configure({ adapter: new EnzymeAdapter() });
const mockStore = configureStore([thunk]);

describe('<App /> unit test', () => {
    let store;
    const onShowClick = () => jest.fn();
    const onHideClick = () => jest.fn();
    beforeEach(() => {
        store = mockStore(rootReducer,initialState);
    });
  const getWrapper = (store) => shallow(
    <Provider store={store}>
      <App/>
    </Provider>
  );


  it('Check Show Data Action', () => {
    store.dispatch = jest.fn();
    const showData = true;
    const actual = ShowDataAction(showData);
    const expected = {type:SHOW_DATA,payload:true};
    expect(actual).toEqual(expected);
    // const wrapper = getWrapper(store);
    // wrapper.find('button').simulate('click');
    // expect(store.dispatch).toEqual(onShowClick());
  });
  it('Check Hide Data Action', () => {
    store.dispatch = jest.fn();
    const showData = false;
    const actual = HideDataAction(showData);
    const expected = {type:HIDE_DATA,payload:false};
    expect(actual).toEqual(expected);
    // const wrapper = getWrapper(store);
    // wrapper.find('button').simulate('click');
    // expect(store.dispatch).toEqual(onShowClick());
  });
  test("Show hide button",() => {
    const props={
        buttonName:"",
        onButtonClick:{onShowClick},
        disabledButton:true
    };
    render(<ShowHideButton {...props}/>)
});

test("Show hide button",() => {
    const props={
        buttonName:"",
        onButtonClick:{onHideClick},
        disabledButton:false
    };
    render(<ShowHideButton {...props}/>)
});

});