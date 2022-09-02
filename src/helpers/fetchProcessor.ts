// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: async<T>(url: string): Promise<T> => {
        console.log("Hello from Fetch");
        return fetch(url)
            .then((response) => response.json())
            .then((data: any) => {
                return data
            });
    }
};
