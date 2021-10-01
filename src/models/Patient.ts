export interface Patient {
    id: number | undefined
    full_name: string
    birth_date: string
    height: number
    address: string
    location_latitude: number
    location_longitude: number
}

export const defaultPatient = {
    id: 0,
    full_name: "",
    birth_date: "",
    height: 0,
    address: "",
    location_latitude: 0,
    location_longitude: 0,
} as Patient
