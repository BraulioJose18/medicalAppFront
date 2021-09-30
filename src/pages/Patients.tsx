import {Component} from "react";
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

class Patients extends Component<any, any> {
    state = {
        items: []
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
                    {this.state.items.map((item: any) => (
                        <IonCard key={item.id}>
                            <h1> {item.full_name} </h1>
                            <h1> {item.birth_date}</h1>
                            <IonCardHeader>
                                <IonCardTitle>
                                    {item.height}
                                </IonCardTitle>
                                <IonCardSubtitle>
                                    {item.address}
                                </IonCardSubtitle>

                            </IonCardHeader>
                            <IonCardContent>
                                <p>CUI: {item.location_latitude}</p>
                                <p>DNI: {item.location_longitude}</p>
                                <IonButton href={"pacientes/" + item.id}> Detail</IonButton>
                            </IonCardContent>
                        </IonCard>

                    ))}
                </IonContent>
            </IonApp>
        );
    }

} export default Patients;