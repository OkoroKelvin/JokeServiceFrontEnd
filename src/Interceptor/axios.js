// import axios from "axios";


// axios.defaults.baseURL = "http://localhost:8081/api/";

// let refresh = false;

// axios.interceptors.response.use((response) => response, 
// async error => {
//     if (error.response.status === 401 && !refresh){
//         refresh = true;

//         const response = await axios.post("refresh", {}){
//             if (response.status === 200){
//                 axios.defaults.headers.common['Authorization'] 
//             }
//         }
//     }
// })