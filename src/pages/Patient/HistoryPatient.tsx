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
    IonList,
    IonItem, IonAvatar, IonLabel, IonIcon, IonFab, IonFabButton
} from '@ionic/react';

import '@ionic/react/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {MedicalHistory} from "../../models/MedicalHistory";
import {MedicalHistoryApiService} from "../../services/MedicalHistoryApiService";

interface PatientProps {
    id: number
}

interface IHistoryState {
    history: MedicalHistory[]
}

class HistoryPatient extends Component<PatientProps, IHistoryState> {

    constructor(props: any) {
        super(props);
        this.state = {
            history: []
        }
    }

    componentDidMount() {
        MedicalHistoryApiService.instance().findByIdPatient(this.props.id).then((response) => {
            if(response){
                this.setState({history: response})
            }
        })
    }

    render() {
        return (
            <IonApp>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Historial del Paciente</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonFab
                        vertical="bottom"
                        horizontal="end"
                        slot="fixed"
                        color="success"
                    >
                        <IonFabButton
                            href={"pacientes/historial/"+this.props.id+"/crear/"}>
                            <IonIcon icon={add}/>
                        </IonFabButton>
                    </IonFab>
                    <div className="itemLista">
                        <IonList mode="ios" lines="full">
                            {this.state.history.map((item: any) => (
                                <IonItem key={item.id}>
                                    <div className="contenedor">
                                        <IonAvatar>
                                            <img src={paciente} alt=""/>
                                        </IonAvatar>
                                    </div>
                                    <IonLabel>
                                        <h1>Fecha de Consulta</h1>
                                        <h2><IonIcon src={calendarClearOutline}/> {item.date_of_check}</h2>
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

export default HistoryPatient;
