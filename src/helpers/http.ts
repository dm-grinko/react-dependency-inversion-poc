import axiosProcessor from "./axiosProcessor";
import fetchProcessor from "./fetchProcessor";

export interface IHttp {
    get<T>(url: string): Promise<T>;
}

const getProcessor = (): string => {
    // What processor are you going to use?
    return "fetchProcessor";
    // return "axiosProcessor";
}

export function Http(): IHttp {
    const processor = getProcessor();
    return { fetchProcessor, axiosProcessor }[processor] as IHttp;
}
