import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: async<T>(url: string): Promise<T> => {
        console.log("Hello from Axios");
        return axios.get(url)
            .then((data: any) => {
                return data.data
            });
    }
};
