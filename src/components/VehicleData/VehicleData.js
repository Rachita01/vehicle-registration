import React, {useState,useEffect} from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
function VehicleData() {
  const [vehicles,setVehicles] = useState([]);
  const columns = [
    {title:"Status of Registration", field:"statusOfReg"},
    {title:"Vehicle Number", field:"vehicleNo"},
    {title:"Owner Name", field:"ownerName"},
    {title:"Date of Registration", field:"dateOfReg"}
  ]
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3000/vehicle');
      setVehicles(res.data);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Vehicle Registration Details</h1>
      <MaterialTable
      title={" "}
      data={vehicles}
      columns={columns}
      />
    </div>
  );
}

export default VehicleData;
