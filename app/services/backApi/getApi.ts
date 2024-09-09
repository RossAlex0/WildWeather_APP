import Constants from 'expo-constants';
import axios from 'axios';

const BACK_URL = Constants.expoConfig!.extra!.BACK_URL;

export default async function findUser( mail: string) {
      axios
      .get(`${BACK_URL}/users/${mail}`)
      .then((res) => res.data)
      .catch((err) => console.error('Error creating user:', err.message)) 
};