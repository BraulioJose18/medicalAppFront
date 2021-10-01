import {MedicalHistory, MedicalHistoryDetail} from "../models/MedicalHistory";
import {API_MEDICAL_HISTORY} from "./ApiCredentials";
import {CrudApiService} from "./CrudApiService";
import axios from "axios";

export class MedicalHistoryApiService extends CrudApiService<number, MedicalHistory> {

    private static _instance: MedicalHistoryApiService

    public static instance(): MedicalHistoryApiService {
        if (!MedicalHistoryApiService._instance) {
            MedicalHistoryApiService._instance = new MedicalHistoryApiService();
        }
        return MedicalHistoryApiService._instance;
    }

    private constructor() {
        super(API_MEDICAL_HISTORY);
    }

    findByIdPatient(id: number): Promise<MedicalHistory[] | void> {
        return axios.get(API_MEDICAL_HISTORY + '?patient__id=' + id).then((response: any) => {
            return response.data as MedicalHistory[]
        }, (reason: any) => {
            console.log(reason)
        });
    }


    readDetail(id: number): Promise<void | MedicalHistoryDetail> {
        return axios.get(API_MEDICAL_HISTORY + id + '/')
            .then((response: any) => {
                return response.data as MedicalHistoryDetail
            }, (reason: any) => {
                console.log(reason)
            });
    }
}
