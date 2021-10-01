import {Component, CSSProperties} from "react";
import paciente from '../../resources/medical-checkup.png'
import {save, person, calendar, accessibility, map, navigate, barbell, thermometer, heart} from "ionicons/icons";
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
import {defaultMedicalCheck, MedicalCheck} from "../../models/MedicalCheck";
import {defaultMedicalHistory, MedicalHistory} from "../../models/MedicalHistory";
import {Redirect} from "react-router-dom";
import {MedicalCheckApiService} from "../../services/MedicalCheckApiService";
import {MedicalHistoryApiService} from "../../services/MedicalHistoryApiService";

interface PatientsProps {
    id: number
}

interface IChecktState {
    redirect: string | undefined
    check: MedicalCheck
    history: MedicalHistory
}

class CreateCheck extends Component<PatientsProps, IChecktState> {
    private check: MedicalCheck;
    private history: MedicalHistory;

    constructor(props: PatientsProps) {
        super(props);
        this.state = {
            redirect: undefined,
            check: defaultMedicalCheck,
            history: defaultMedicalHistory
        }
        this.check = defaultMedicalCheck
        this.history = defaultMedicalHistory
    }

    save() {
        console.log("Gaaaaa")
        MedicalCheckApiService.instance().create(this.state.check).then((response) => {
            if (response != null){
                console.log(response)
                if (response.id != null) {
                    this.history.medical_check = response.id
                }
                this.history.patient = this.props.id
                this.history.date_of_check = new Date().toISOString().split('T')[0]
                this.setState({history: this.history})
                console.log(this.state.history)
                MedicalHistoryApiService.instance().create(this.state.history).then((response) => {
                    console.log("Gaaaaaaaaaaaaaaaaaaaa")
                    console.log(response)
                })
            }
                this.setState({redirect: '/pacientes/historial/'+this.props.id})
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
                        <IonTitle>Crear Chequeo</IonTitle>
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
                                        icon={barbell}
                                    /> Peso</IonLabel>
                                <IonInput onIonChange={e => {
                                    this.check.weight = Number(e.detail.value!)
                                    this.setState({
                                        check: this.check
                                    })
                                }}/>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">
                                    <IonIcon
                                        icon={thermometer}
                                    /> Temperatura</IonLabel>
                                <IonInput onIonChange={e => {
                                    this.check.temperature = Number(e.detail.value!)
                                    this.setState({
                                        check: this.check})
                                }}/>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">
                                    <IonIcon
                                        icon={heart}
                                    /> Presion</IonLabel>
                                <IonInput onIonChange={e => {
                                    this.check.pressure = Number(e.detail.value!)
                                    this.setState({
                                        check: this.check})
                                }}/>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">
                                    <IonIcon
                                        icon={heart}
                                    /> Saturación</IonLabel>
                                <IonInput onIonChange={e => {
                                    this.check.saturation = Number(e.detail.value!)
                                    this.setState({
                                        check: this.check})
                                }}/>
                            </IonItem>
                            <IonButton
                                color="success"
                                expand="block"
                                onClick={() => {
                                    this.save()
                                }}
                            >
                                <IonIcon slot="start" src={save}/>Crear Chequeo</IonButton>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonApp>
        );
    }
}

export default CreateCheck;
