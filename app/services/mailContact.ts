import * as MailComposer from 'expo-mail-composer';
import { Alert } from 'react-native';

const handleMailContact = async ( userName: string) => {
    const isAvailable = await MailComposer.isAvailableAsync();
    if (isAvailable) {
      MailComposer.composeAsync({
        recipients: ['supportWeather@wildweather.com'], 
        subject: `[Support] ${userName}`,
        body: '["You can write here..."]',
      });
    } else {
      Alert.alert('Service indisponible', "Votre appareil ne peut pas envoyer d'email.");
    }
  };

  export default handleMailContact;