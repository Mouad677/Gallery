import { IonBadge, IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './SignUp.css';

const SignUp: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
       
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="" />
        <IonCard color='light'>
          <IonCardHeader>
            <IonTitle>
              <IonBadge mode='ios' color='success' ><label>Register</label></IonBadge>
            </IonTitle>
            <IonCardContent>
              <IonInput labelPlacement='floating' label='Nom' fill='outline' type='text'  
              placeholder='Saisir le nom' helperText='Champ obligatoire*' ></IonInput>
              <br/>
              <IonInput label='Prenom' placeholder='Saisir le prenom' labelPlacement='floating'
              fill='outline' helperText='Champ obligatoir*' type='text'></IonInput>
              <br/>
              <IonInput label='Email' placeholder='Saisir adresse email' type='email'
              labelPlacement='floating' fill='outline' helperText='Chmap obligatoire*'></IonInput>
              <br/>
              <IonInput label='Mot de passe' placeholder='Saisir le mot de passe' type='password'
              labelPlacement='floating' fill='outline' helperText='Champ obligatoire*' ></IonInput>
            </IonCardContent>
          </IonCardHeader>
          
        </IonCard>
      </IonContent>
      <IonButton fill='solid' color='success' mode='ios' shape='round' strong>Creer le compte</IonButton>
      <IonButton fill='outline' mode='ios' shape='round' strong>Login</IonButton>
    </IonPage>
  );
};

export default SignUp;
