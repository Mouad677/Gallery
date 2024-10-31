import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, images, albums, archive, logIn, create, recordingSharp, trailSign, trailSignSharp, accessibilityOutline, createOutline, createSharp } from 'ionicons/icons';
import Tab1 from './pages/Login';
import Tab2 from './pages/Gallery';
import Tab3 from './pages/SignUp';

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
import '@ionic/react/css/core.css';



/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Gallery from './pages/Gallery';

setupIonicReact();

  

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Login">
            <Login/>
          </Route>
          <Route exact path="/Gallery">
            <Gallery />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Login" href="/Login">
            <IonIcon aria-hidden="true" icon={logIn} />
            <IonLabel>Login</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Gallery" href="/Gallery">
            <IonIcon aria-hidden="true" icon={images} />
            <IonLabel>Photos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="SignUp" href="/SignUp">
            <IonIcon aria-hidden="true" icon={createSharp} />
            <IonLabel>Register</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
