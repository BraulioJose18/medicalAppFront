import {Patient} from "./Patient";
import {MedicalCheck} from "./MedicalCheck";

export interface MedicalHistoryDetail {
    id: number | undefined
    date_of_check: string
    patient: Patient
    medical_check: MedicalCheck
}

export interface MedicalHistory {
    id: number | undefined
    date_of_check: string
    patient: number
    medical_check: number
}
export const defaultMedicalHistory = {
    id: 0,
    date_of_check: '',
    patient: 0,
    medical_check: 0
} as MedicalHistory
