import axios from 'axios';
const url = "http://localhost:3000/vehicle";
export const getVehicles = async() => {
    const res = await axios.get(url);
    console.log(res.data);
    return res.data;
}
