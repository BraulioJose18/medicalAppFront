import {Component} from "react";
import {PatientApiService} from "../services/PatientApiService";
import paciente from '../resources/paciente.png'
import {calendarClearOutline, navigate, map, body, trash, eye, add} from "ionicons/icons";
import './Page.css'
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
import logo from "../resources/epis.png";

class Patients extends Component<any, any> {
    state = {
        items: []
    }
    deletePatient(id: any){
        PatientApiService.instance().delete(id).then(()=>{
            this.componentDidMount()
        })
    }
    componentDidMount() {
        PatientApiService.instance().list().then((response) =>{
            console.log(response)
            this.setState({items: response})
        })
    }
    render() {
        return (
            <IonApp>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Pacientes</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton
                            href={"pacientes/crear"}>
                            <IonIcon
                                icon={add}
                            />
                        </IonFabButton>
                    </IonFab>
                    <div className="itemLista">
                        <IonList mode="ios" lines="full">
                            {this.state.items.map((item: any) => (
                                <IonItem key={item.id}>
                                    <div className="contenedor">
                                        <IonAvatar>
                                            <img src={paciente}/>
                                        </IonAvatar>
                                    </div>
                                    <IonLabel>
                                        <h1>{item.full_name}</h1>
                                        <h2> <IonIcon src={calendarClearOutline}/>  {item.birth_date}</h2>
                                        <h2> <IonIcon src={body}/> {item.height}</h2>
                                        <h2> <IonIcon src={navigate}/> {item.address}</h2>
                                        <h2> <IonIcon src={map}/> {item.location_latitude}, {item.location_longitude}</h2>
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

} export default Patients;