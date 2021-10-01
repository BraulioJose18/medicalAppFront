import {Patient} from "./Patient";

export interface MedicalCheck {
    id: number | undefined
    weight: number
    temperature: number
    pressure: number
    saturation: number
}
export const defaultMedicalCheck = {
    id: 0,
    weight: 0,
    temperature: 0,
    pressure: 0,
    saturation: 0,
} as MedicalCheck
