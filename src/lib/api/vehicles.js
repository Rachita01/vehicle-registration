import axios from 'axios';
const url = "http://localhost:3000/vehicle";

export const getVehicles = async (page, rowsPerPage) => {
    const res = await axios.get(`${url}?_page=${page}&_limit=${rowsPerPage}`);
    console.log(res.data);
    return res.data;
}

export const getVehiclesCount = async () => {
    const res = await axios.get(url);
    const count = res.data.length;
    console.log(count);
    return count;
}

