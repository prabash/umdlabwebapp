import axios from "axios";

let baseURL = `http://localhost:5000`;
//let baseURL = `https://umdlabtestapi.herokuapp.com`;

export const helloWorldTest = (name) => {
    const URL = baseURL + `/helloworld/${name}`;
    return axios.get(URL).then(res => res);
}

export const uploadFile = (image) => {
    const URL = baseURL + `/uploadimage/`;
    return axios.post(URL, image, {timeout : 100000});
}

export const GetProcessedFile = () => {
    const URL = baseURL + `/returnimage/`
    return axios.get(URL, {
        responseType: 'blob',
        timeout: 30000
    }).then(res => res);
}