import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { GetVehiclesAction } from '../../redux/actions/Vehicles/GetVehiclesAction';
import { useSelector, useDispatch } from 'react-redux'

function VehicleData() {
  const VehicleData = useSelector(state => state.vehicles);
  const dispatch = useDispatch();

  const columns = [
    { title: "Status of Registration", field: "statusOfReg" },
    { title: "Vehicle Number", field: "vehicleNo" },
    { title: "Owner Name", field: "ownerName" },
    { title: "Date of Registration", field: "dateOfReg" }
  ]
  useEffect(() => {
    dispatch(GetVehiclesAction());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Vehicle Registration Details</h1>
      <MaterialTable
        title={" "}
        data={VehicleData}
        columns={columns}
      />
    </div>
  );
}

export default VehicleData;
