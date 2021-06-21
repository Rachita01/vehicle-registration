import React from 'react';
import './App.css';
import VehicleData from './components/VehicleData/VehicleData';
import { ShowHideButton } from './components/Button/ShowHideButton';
import { useSelector,useDispatch } from 'react-redux';
import {ShowDataAction} from './redux/actions/ShowData/ShowDataAction';
import {HideDataAction} from './redux/actions/HideData/HideDataAction';
function App() {
  const showData = useSelector(state => state.showData);
  const dispatch = useDispatch();
  const onShowClick = () => {
    dispatch(ShowDataAction());
  }

  const onHideClick = () => {
    dispatch(HideDataAction());
  }

  return (
    <div className="App">
      {showData && <VehicleData />}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
        <ShowHideButton buttonName="Show" onButtonClick={onShowClick} disabledButton={showData}/>
        <ShowHideButton buttonName="Hide" onButtonClick={onHideClick} disabledButton={!showData}/>
      </div>
    </div>
  );
}

export default App;
