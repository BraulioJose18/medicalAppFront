import axios from "axios";
import {removeUndefined} from "./Utils";

export abstract class CrudApiService<ID, O> {
    private readonly API_URL_SERVICE: string

    protected constructor(API_URL_SERVICE: string) {
        this.API_URL_SERVICE = API_URL_SERVICE;
    }

    create(object: O): Promise<O | void> {
        return axios.post(this.API_URL_SERVICE, removeUndefined(object))
            .then((response: any) => {
                return response.data as O
            }, (reason: any) => {
                console.log(reason)
            });
    }

    read(id: number): Promise<O | void> {
        return axios.get(this.API_URL_SERVICE + id + '/')
            .then((response: any) => {
                return response.data as O
            }, (reason: any) => {
                console.log(reason)
            });
    }

    update(object: O): Promise<O | void> {
        return axios.put(this.API_URL_SERVICE, removeUndefined(object))
            .then((response: any) => {
                return response.data as O
            }, (reason: any) => {
                console.log(reason)
            });
    }

    delete(id: ID): Promise<any> {
        return axios.delete(this.API_URL_SERVICE + id + '/');
    }

    list(): Promise<O[] | void> {
        return axios.get(this.API_URL_SERVICE)
            .then((response: any) => {
                return response.data as O[]
            }, (reason: any) => {
                console.log(reason)
            });
    }
}
