import axios from "axios";

const API_BASE_URL = "https://75bz9a7yu6.execute-api.us-east-2.amazonaws.com/test/getcsv";

// export const fetchData = async (requestData) => {
//     requestData.baseURL = API_BASE_URL;
//     requestData.responseType = "csv";
//     if (requestData.method?.toLocaleLowerCase() === "get") {
//         // set timetamp to prevent browser cache
//         const params = requestData.params||{};
//         params["_"] = new Date().getTime();
//         requestData.params = params;
//     }

//     try {
//         console.log(`Sending request to: ${requestData.url}, params: ${JSON.stringify(requestData.params)}`);
//         const { data } = await axios(requestData);
//         console.log(`Received response from: ${requestData.url}`);
//         return data;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };

export const fetchData = async (url) => {
    try {
        console.log(`Sending request to: ${url}`);
        const response = await axios.get(url);
        console.log(`Received statusCode: ${response.status}`);
        return response.data;
    } catch (error) {
        console.log(`Failed to fetch data from: ${url}`)
        throw new Error(error.message);
    }
}