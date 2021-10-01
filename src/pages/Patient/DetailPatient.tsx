import {Component} from "react";
import logo from '../../resources/epis.png'
import {body, calendarClearOutline, clipboard, map, navigate, trash} from "ionicons/icons";
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
    IonButton, IonItem, IonIcon,
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
                        <img src={logo}/>
                            <IonCardHeader>
                                <IonCardTitle>{this.state.patient.full_name}</IonCardTitle>
                                <IonCardSubtitle>
                                    <IonIcon src={calendarClearOutline}/> {this.state.patient.birth_date}
                                </IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <h2>Datos Personaless</h2>
                                <h3> <IonIcon src={body}/> {this.state.patient.height}</h3>
                                <h3> <IonIcon src={navigate}/> {this.state.patient.address}</h3>
                                <h3> <IonIcon src={map}/> {this.state.patient.location_latitude} , {this.state.patient.location_longitude}</h3>
                            </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonApp>
        );
    }

} export default DetailPatient;