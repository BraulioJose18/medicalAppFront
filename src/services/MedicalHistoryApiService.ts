import {MedicalHistory} from "../models/MedicalHistory";
import {API_MEDICAL_HISTORY} from "./ApiCredentials";
import {CrudApiService} from "./CrudApiService";

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

}
