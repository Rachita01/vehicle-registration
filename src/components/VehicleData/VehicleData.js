import React, { useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import { GetVehiclesAction } from '../../redux/actions/Vehicles/GetVehiclesAction';
import { GetVehiclesCountAction } from '../../redux/actions/Vehicles/GetVehiclesCountAction';
import { useSelector, useDispatch } from 'react-redux'
import { forwardRef } from 'react';
import Pagination from '@material-ui/lab/Pagination'

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


function VehicleData() {
  const VehicleData = useSelector(state => state.vehicles);
  const vehiclesCount = useSelector(state => state.vehiclesCount);
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const dispatch = useDispatch();

  const columns = [
    { title: "Status of Registration", field: "statusOfReg" },
    { title: "Vehicle Number", field: "vehicleNo" },
    { title: "Owner Name", field: "ownerName" },
    { title: "Date of Registration", field: "dateOfReg" }
  ]
  useEffect(() => {
    dispatch(GetVehiclesAction(page, rowsPerPage));
    dispatch(GetVehiclesCountAction());
  }, [dispatch, page]);

  const handlePageChange = (event, pageNumber) => {
    setPage(pageNumber);
  }
  return (
    <div className="App">
      <h1>Vehicle Registration Details</h1>
      <MaterialTable
        title={" "}
        data={VehicleData}
        columns={columns}
        icons={tableIcons}
        options={{ paging: false }}
      />
      <Pagination style={{display:'table', margin:'auto', paddingTop:20}} count={Math.ceil(vehiclesCount / rowsPerPage)} page={page} onChange={handlePageChange} />
    </div>
  );
}

export default VehicleData;
