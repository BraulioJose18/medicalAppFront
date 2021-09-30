import {Patient} from "../models/Patient";
import {API_PATIENT} from "./ApiCredentials";
import {CrudApiService} from "./CrudApiService";

export class PatientApiService extends CrudApiService<number, Patient> {

    private static _instance: PatientApiService

    public static instance(): PatientApiService {
        if (!PatientApiService._instance) {
            PatientApiService._instance = new PatientApiService();
        }
        return PatientApiService._instance;
    }

    private constructor() {
        super(API_PATIENT);
    }

}
