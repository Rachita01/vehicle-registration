import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { GetVehiclesAction } from '../../redux/actions/Vehicles/GetVehiclesAction';
import { GetVehiclesCountAction } from '../../redux/actions/Vehicles/GetVehiclesCountAction';
import { useSelector, useDispatch} from 'react-redux'
import { forwardRef } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
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

const CustomDatePicker = (props) => {
  const [date, setDate] = useState(null);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label="Date Filter"
        format="dd.MM.yyyy"
        clearable
        value={date}
        onChange={(event) => {
          console.log("Date picker value: ", event);

          setDate(event);
          console.log(new Date(event).toLocaleDateString());
          props.onFilterChanged(props.columnDef.tableData.id, event);
        }}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

function VehicleData() {
  const vehiclesData = useSelector(state => state.vehicles);
  const vehiclesCount = useSelector(state => state.vehiclesCount);
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const dispatch = useDispatch();


  const columns = [
    { title: "Status of Registration", field: "statusOfReg" },
    { title: "Vehicle Number", field: "vehicleNo" },
    { title: "Owner Name", field: "ownerName" },
    {
      title: "Date of Registration",
      field: "dateOfReg",
      render: rowData => displayDate(rowData.dateOfReg),
      type: "date",
      filterComponent: (props) => <CustomDatePicker {...props} />
    }
  ];

  const displayDate = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate() < 10 ? '0' : ''}${newDate.getDate()}.${newDate.getMonth() < 9 ? '0' : ''}${newDate.getMonth() + 1}.${newDate.getFullYear()}`
  }

  useEffect(() => {
    dispatch(GetVehiclesAction(page, rowsPerPage));
    dispatch(GetVehiclesCountAction());
  }, [dispatch, page]);

  const handlePageChange = (_event, pageNumber) => {
    setPage(pageNumber);
  }
  return (
    <div data-test="vehicleTable">
      <h1 data-test="headerComponent">Vehicle Registration Details</h1>
      <MaterialTable
        data-test="dataTable"
        title={" "}
        data={vehiclesData}
        columns={columns}
        icons={tableIcons}
        options={{ paging: false, filtering: true }}
      // localization={{
      //   body: {
      //     dateTimePickerLocalization: enLocale
      //   }
      // }}
      />
      <Pagination data-test="apiPagination" style={{ display: 'table', margin: 'auto', paddingTop: 20 }} count={Math.ceil(vehiclesCount / rowsPerPage)} page={page} onChange={handlePageChange} />

    </div>
  );
}

export default VehicleData;
