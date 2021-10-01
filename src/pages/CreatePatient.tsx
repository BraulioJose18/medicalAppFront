import {Component} from "react";
import paciente from '../resources/paciente.png'
import {save, person, calendar, accessibility,map, navigate} from "ionicons/icons";
import {PatientApiService} from "../services/PatientApiService";
import {
    IonApp,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonInput,
    IonLabel,
    IonCard,
    IonButton, IonItem, IonIcon, IonCardContent, IonCardHeader, IonGrid, IonRow, IonCol, IonDatetime, IonAvatar
} from '@ionic/react';

import '@ionic/react/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {Patient} from "../models/Patient";
interface iPatientState {
    patient: Patient
}

class CreatePatient extends Component<any,any> {
    state = {
        patient: {
            full_name: "",
            birth_date: undefined,
            height: "",
            address: "",
            location_latitude: "",
            location_longitude: "",
        },
        setSelectedDate: null,
    }
    crearUsuario(){

    }
    componentDidMount() {
        PatientApiService.instance().read(this.props.id).then((response) =>{
            console.log(response)
            this.setState({patient: response})
        })
    }

    render() {
        return (
            <IonApp>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Crear Paciente</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonCard>
                        <IonCardHeader>
                            <IonRow>
                                <IonCol>
                                </IonCol>
                                <IonCol>
                                    <IonAvatar>
                                        <img src={paciente}/>
                                    </IonAvatar>
                                </IonCol>
                                <IonCol>
                                </IonCol>
                            </IonRow>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonItem>
                                <IonLabel position="floating">
                                    <IonIcon
                                    icon={person}
                                /> Nombre completo</IonLabel>
                                <IonInput value={this.state.patient.full_name}/>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">
                                    <IonIcon
                                        icon={calendar}
                                    /> Fecha de Nacimiento</IonLabel>
                                <IonInput value={this.state.patient.birth_date}/>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">
                                    <IonIcon
                                        icon={accessibility}
                                    /> Altura</IonLabel>
                                <IonInput value={this.state.patient.height}/>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">
                                    <IonIcon
                                        icon={map}
                                    /> Dirección</IonLabel>
                                <IonInput value={this.state.patient.address}/>
                            </IonItem>
                            <IonGrid>
                                <IonRow>
                                    <IonCol>
                                        <IonItem>
                                            <IonLabel position="floating">
                                                <IonIcon
                                                    icon={navigate}
                                                /> Latitud</IonLabel>
                                            <IonInput value={this.state.patient.location_latitude}/>
                                        </IonItem>
                                    </IonCol>
                                    <IonCol>
                                        <IonItem>
                                            <IonLabel position="floating">
                                                <IonIcon
                                                    icon={navigate}
                                                /> Longitud</IonLabel>
                                            <IonInput value={this.state.patient.location_longitude}/>
                                        </IonItem>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                            <IonButton
                                color="success"
                                expand="block"
                            >
                                <IonIcon slot="start" src={save}/>Crear Paciente</IonButton>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonApp>
        );
    }

} export default CreatePatient;