import { fetchData } from "./FetchData";
import axios from "axios";

const API_BASE_URL = "https://75bz9a7yu6.execute-api.us-east-2.amazonaws.com/test/getcsv?major=music";


export const AppApiClient = {
    // getCSV: async (major) => {
    //     const requestData = {
    //         method: "get",
    //         url: API_BASE_URL,
    //         params: {
    //             major
    //         }
    //     };
    //     const data = await fetchData(requestData);
    //     return data;
    // },

    getCSV: (major) =>
    axios({
        'method':'GET',
        'url':'https://75bz9a7yu6.execute-api.us-east-2.amazonaws.com/test/getcsv?major=music',
        // 'params': {
        //     'major':'music',
        // },
    })
};


