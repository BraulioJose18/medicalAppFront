import {Component} from "react";
import {PatientApiService} from "../../services/PatientApiService";
import paciente from '../../resources/paciente.png'
import {
    calendarClearOutline,
    navigate,
    map,
    body,
    trash,
    eye,
    add,
    pencil,
    reader
} from "ionicons/icons";
import '../Page.css'
import {
    IonApp,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonList,
    IonItem, IonAvatar, IonLabel, IonIcon, IonGrid, IonRow, IonCol, IonFab, IonFabButton
} from '@ionic/react';

import '@ionic/react/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {Patient} from "../../models/Patient";

interface IPatientsState {
    patients: Patient[]
}

class Patients extends Component<any, IPatientsState> {

    constructor(props: any) {
        super(props);
        this.state = {
            patients: []
        }
    }

    deletePatient(id: any) {
        PatientApiService.instance().delete(id).then(() => {
            this.componentDidMount()
        })
    }

    componentDidMount() {
        PatientApiService.instance().list().then((response) => {
            if (response)
                this.setState({patients: response})
        })
    }

    render() {
        return (
            <IonApp>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>App Medica</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton
                            href={"pacientes/crear"}>
                            <IonIcon icon={add}/>
                        </IonFabButton>
                    </IonFab>
                    <div className="itemLista">
                        <IonList mode="ios" lines="full">
                            {this.state.patients.map((item: any) => (
                                <IonItem key={item.id}>
                                    <div className="contenedor">
                                        <IonAvatar>
                                            <img src={paciente} alt=""/>
                                        </IonAvatar>
                                    </div>
                                    <IonLabel>
                                        <h1>{item.full_name}</h1>
                                        <h2><IonIcon src={calendarClearOutline}/> {item.birth_date}</h2>
                                        <h2><IonIcon src={body}/> {item.height}</h2>
                                        <h2><IonIcon src={navigate}/> {item.address}</h2>
                                        <h2><IonIcon src={map}/> {item.location_latitude}, {item.location_longitude}
                                        </h2>
                                        <IonGrid>
                                            <IonRow>
                                                <IonCol>
                                                    <IonButton
                                                        color="danger"
                                                        shape="round"
                                                        expand="block"
                                                        onClick={() => this.deletePatient(item.id)}
                                                    >
                                                        <IonIcon slot="icon-only" src={trash}/></IonButton>
                                                </IonCol>
                                                <IonCol>
                                                    <IonButton
                                                        color="success"
                                                        expand="block"
                                                        shape="round"
                                                        href={"pacientes/" + item.id}
                                                    >
                                                        <IonIcon slot="icon-only" src={eye}/></IonButton>
                                                </IonCol>
                                                <IonCol>
                                                    <IonButton
                                                        color="tertiary"
                                                        expand="block"
                                                        shape="round"
                                                        href={"pacientes/editar/" + item.id}
                                                    >
                                                        <IonIcon slot="icon-only" src={pencil}/></IonButton>
                                                </IonCol>
                                                <IonCol>
                                                    <IonButton
                                                        color="warning"
                                                        expand="block"
                                                        shape="round"
                                                        href={"pacientes/historial/" + item.id}
                                                    >
                                                        <IonIcon slot="icon-only" src={reader}/></IonButton>
                                                </IonCol>
                                            </IonRow>
                                        </IonGrid>
                                    </IonLabel>
                                </IonItem>
                            ))}
                        </IonList>
                    </div>
                </IonContent>
            </IonApp>
        );
    }

}

export default Patients;
