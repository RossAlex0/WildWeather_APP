import * as Location from 'expo-location';
import { locationInterface } from '../../../types/interfaces/locationInterfaces';

export default function requestLocation(
    setErrorMsg:(errorMsg: string)=> void,
    setLocation:(location: locationInterface) => void 
    ): void{
    (async () => {
      
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let locationData = await Location.getCurrentPositionAsync({});
        setLocation(locationData);
      })();
}