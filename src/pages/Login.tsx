import { IonActionSheet, IonAlert, IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonContent, IonHeader, IonIcon, IonInput, IonLabel, IonPage, IonRippleEffect, IonTitle, IonToolbar, useIonActionSheet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';
import { IonButton, IonDatetime } from '@ionic/react';
import { heart, albums, bag, text, close, logoMarkdown, logIn, logOut } from 'ionicons/icons';
import { Animation } from '@ionic/react';

// const [actionSheet] = useIonActionSheet();

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        {/* <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar> */}
      </IonHeader>
      <IonContent fullscreen>
      
        {/* <IonIcon mode='ios' slot='icon-only' icon={logOut} ></IonIcon> */}
        <IonAlert 
          trigger='alert'
          header='Confirmation'
          message='Se deconnecter'
          mode='ios'
          buttons={[
            {
              text: 'Annuler',
              role: 'cancel',
            },
            {
              text: 'Deconnecter',
              role: 'confirm',
            },
          ]}
          inputs={[
            /*{
              placeholder: 'Nom',
              type: 'text',
            },
            {
              placeholder: 'Age',
              type: 'number',
              min: 5,
              max: 34,
            },*/
            {
              label: 'Oui',
              type: 'checkbox',
              value: 'oui',
            },
            {
              label: 'Non',
              type: 'radio',
              value: 'femme',
            },
          ]}
          ></IonAlert>
      <IonCard color='light'>
        {/* <img width='940px' height='230px' alt='Silhouette of mountains' src='https://media.istockphoto.com/id/1449307455/photo/fingerprint-authentication-button-biometric-security.jpg?s=2048x2048&w=is&k=20&c=4cEQt9RcxTxP4fbJbUc3uaQNOO2Fp2aycdITUPwef2g=' ></img> */}
          <IonCardHeader >
            <IonCardTitle ><IonBadge mode='ios' color='success'> <IonLabel >Login</IonLabel> </IonBadge></IonCardTitle>
            <IonCardContent mode='md'>
              <IonInput fill='outline' label='Email' labelPlacement='floating' 
              placeholder='Saisir email' type='email' helperText='Champ obligatoire*' 
              errorText='Email Invalid!' >
              </IonInput>
              <br/>
              <IonInput fill='outline' label='Mot de passe' labelPlacement='floating'
               placeholder='Saisir le mot de passe' type='password' helperText='Champ obligatoire*' 
               errorText='Password Invalid!' counter={true} ></IonInput>
             
            </IonCardContent>
          </IonCardHeader>

      </IonCard>        

             {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <ExploreContainer name="" />
        <IonCheckbox mode='ios' justify='start' >Rester Connecter</IonCheckbox>
      </IonContent> 
      

      <IonButton fill='outline' target='_blank' color='success' shape='round' strong mode='ios' >
        Creer un Compte</IonButton>
      <IonButton fill='solid' id='connecter' shape='round' color='primary' mode='ios'>Se Connecter</IonButton> 
         
      <IonActionSheet
        trigger='supprimer'
        buttons= {
          [
            {
              text: 'Supprimer',
              role: 'destructive',
              htmlAttributes: {
                'aria-label': 'close',
                animated: 'true',
              }
            
            },
            {
              text: 'Annuler',
              role: 'cancel',
            }
          ]
        }
        
      >
      </IonActionSheet>
      
    </IonPage>
  );
};

export default Login;
