import {IonApp, IonRouterOutlet, IonSplitPane} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {Redirect, Route} from 'react-router-dom';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Patients from "./pages/Patient/Patients";
import DetailPatient from "./pages/Patient/DetailPatient";
import CreatePatient from "./pages/Patient/CreatePatient";
import EditPatient from "./pages/Patient/EditPatient";
import HistoryPatient from "./pages/Patient/HistoryPatient";
import CreateCheck from "./pages/Patient/CreateCheck";

const App: React.FC = () => {
    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/pacientes" component={Patients}/>
                    <Route exact path="/pacientes/historial/:id" render={(props) => (
                        <HistoryPatient id={Number(props.match.params.id)}/>
                    )}/>
                    <Route exact path="/pacientes/historial/:id/crear" render={(props) => (
                        <CreateCheck id={Number(props.match.params.id)}/>
                    )}/>
                    <Route exact path="/pacientes/:id" render={(props) => (
                        <DetailPatient id={Number(props.match.params.id)}/>
                    )}/>
                    <Route path="/pacientes/crear" component={CreatePatient}/>
                    <Route exact path="/pacientes/editar/:id" render={(props) => (
                        <EditPatient id={Number(props.match.params.id)}/>
                    )}/>
                    <Redirect exact from="/" to="/pacientes"/>
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    );
};

export default App;
