import {Component} from "react";
import {Patient} from "../models/Patient";
import {PatientApiService} from "../services/PatientApiService";
import {
    IonApp,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonButton
} from '@ionic/react';

import '@ionic/react/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import Patients from "./Patients";

type PatientsProps = {
    id: number
}

class DetailPatient extends Component<PatientsProps> {
    state = {
        patient: {
            full_name: "",
            birth_date: "",
            height: "",
            address: "",
            location_latitude: "",
            location_longitude: "",
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (
        props: PatientsProps
    ){
        super(props)
    }
    componentDidMount() {
        console.log("Wiii")
        PatientApiService.instance().read(this.props.id).then((response) =>{
            console.log(response)
            this.setState({patient: response})
        })
    }
    render() {
        return (
            <IonApp>
                <IonButton href={"/pacientes"}> List of Students</IonButton>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>EPIS DETAIL ENROLLMENT</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>
                                {this.state.patient.full_name}
                            </IonCardTitle>
                            <IonCardSubtitle>
                                {this.state.patient.birth_date}
                            </IonCardSubtitle>

                        </IonCardHeader>
                        <IonCardContent>
                            <p>CUI: {this.state.patient.height}</p>
                            <p>DNI: {this.state.patient.address}</p>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonApp>
        );
    }

} export default DetailPatient;