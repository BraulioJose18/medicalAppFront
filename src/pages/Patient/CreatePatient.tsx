import {Component, CSSProperties} from "react";
import paciente from '../../resources/paciente.png'
import {save, person, calendar, accessibility, map, navigate} from "ionicons/icons";
import {PatientApiService} from "../../services/PatientApiService";
import {
    IonApp,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonInput,
    IonLabel,
    IonCard,
    IonButton, IonItem, IonIcon, IonCardContent, IonCardHeader, IonDatetime, IonAvatar, IonRow, IonCol
} from '@ionic/react';

import '@ionic/react/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {defaultPatient, Patient} from "../../models/Patient";
import {Redirect} from "react-router-dom";

interface IPatientState {
    redirect: string | undefined
    patient: Patient
}

class CreatePatient extends Component<any, IPatientState> {
    private patient: Patient;

    constructor(props: any) {
        super(props);
        this.state = {
            redirect: undefined,
            patient: defaultPatient
        }
        this.patient = defaultPatient
    }

    save() {
        PatientApiService.instance().create(this.state.patient).then((patient) => {
            if (patient)
                this.setState({redirect: '/pacientes'})
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }
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
                                        <img src={paciente} alt=""/>
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
                                <IonInput onIonChange={e => {
                                    // console.log(e.detail.value!)
                                    this.patient.full_name = e.detail.value! as unknown as string
                                    this.setState({
                                        patient: this.patient
                                    })
                                }}/>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">
                                    <IonIcon
                                        icon={calendar}
                                    /> Fecha de Nacimiento</IonLabel>
                                <IonDatetime min="1997" max="2010"
                                             displayFormat="YYYY-MM-DD"
                                             onIonChange={e => {
                                                 this.patient.birth_date = e.detail.value!.toString().split('T')[0]
                                                 this.setState({patient: this.patient})
                                             }}/>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">
                                    <IonIcon
                                        icon={accessibility}
                                    /> Altura</IonLabel>
                                <IonInput
                                    onIonChange={e => {
                                        // console.log(e.detail.value!)
                                        this.patient.height = e.detail.value! as unknown as number
                                        this.setState({
                                            patient: this.patient
                                        })
                                    }}/>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">
                                    <IonIcon
                                        icon={map}
                                    /> Dirección</IonLabel>
                                <IonInput onIonChange={e => {
                                    // console.log(e.detail.value!)
                                    this.patient.address = e.detail.value! as unknown as string
                                    this.setState({
                                        patient: this.patient
                                    })
                                }}/>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">
                                    <IonIcon
                                        icon={navigate}
                                    /> Latitud</IonLabel>
                                <IonInput onIonChange={e => {
                                    // console.log(e.detail.value!)
                                    this.patient.location_latitude = e.detail.value! as unknown as number
                                    this.setState({
                                        patient: this.patient
                                    })
                                }}/>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">
                                    <IonIcon
                                        icon={navigate}
                                    /> Longitud</IonLabel>
                                <IonInput onIonChange={e => {
                                    // console.log(e.detail.value!)
                                    this.patient.location_longitude = e.detail.value! as unknown as number
                                    this.setState({
                                        patient: this.patient
                                    })
                                }}/>
                            </IonItem>
                            <IonButton
                                color="success"
                                expand="block"
                                onClick={() => {
                                    this.save()
                                }}
                            >
                                <IonIcon slot="start" src={save}/>Crear Paciente</IonButton>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonApp>
        );
    }
}

export default CreatePatient;
