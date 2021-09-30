import {API_MEDICAL_CHECK} from "./ApiCredentials";
import {CrudApiService} from "./CrudApiService";
import {MedicalCheck} from "../models/MedicalCheck";

export class MedicalCheckApiService extends CrudApiService<number, MedicalCheck> {

    private static _instance: MedicalCheckApiService

    public static instance(): MedicalCheckApiService {
        if (!MedicalCheckApiService._instance) {
            MedicalCheckApiService._instance = new MedicalCheckApiService();
        }
        return MedicalCheckApiService._instance;
    }

    private constructor() {
        super(API_MEDICAL_CHECK);
    }

}
