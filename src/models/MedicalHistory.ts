import {Patient} from "./Patient";
import {MedicalCheck} from "./MedicalCheck";

export interface MedicalHistory {
    id: number | undefined
    date_of_check: string
    patient: Patient
    medical_check: MedicalCheck
}
