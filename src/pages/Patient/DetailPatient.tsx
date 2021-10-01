import {Component} from "react";
import logo from '../../resources/epis.png'
import {body, calendarClearOutline, clipboard, map, navigate} from "ionicons/icons";
import {PatientApiService} from "../../services/PatientApiService";
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
    IonButton, IonIcon,
} from '@ionic/react';

import '@ionic/react/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {defaultPatient, Patient} from "../../models/Patient";

interface PatientsProps {
    id: number
}

interface IPatientState {
    patient: Patient
}

class DetailPatient extends Component<PatientsProps, IPatientState> {

    constructor(props: PatientsProps) {
        super(props)
        this.state = {
            patient: defaultPatient
        }
    }


    componentDidMount() {
        PatientApiService.instance().read(this.props.id).then((response) => {
            if (response)
                this.setState({patient: response})
        })
    }

    render() {
        return (
            <IonApp>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Detalle</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonButton
                        href={"/pacientes"}
                        color="secondary"
                        expand="block"
                        className="boton"
                        fill="outline"
                    >
                        <IonIcon slot="start" src={clipboard}/>Listado de Pacientes</IonButton>
                    <IonCard>
                        <img src={logo} alt=""/>
                        <IonCardHeader>
                            <IonCardTitle>{this.state.patient.full_name}</IonCardTitle>
                            <IonCardSubtitle>
                                <IonIcon src={calendarClearOutline}/> {this.state.patient.birth_date}
                            </IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <h2>Datos Personaless</h2>
                            <h3><IonIcon src={body}/> {this.state.patient.height}</h3>
                            <h3><IonIcon src={navigate}/> {this.state.patient.address}</h3>
                            <h3><IonIcon
                                src={map}/> {this.state.patient.location_latitude} , {this.state.patient.location_longitude}
                            </h3>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonApp>
        );
    }
}

export default DetailPatient;
