import Constants from 'expo-constants';
import axios from 'axios';

const BACK_URL = Constants.expoConfig!.extra!.BACK_URL;

export default function addUser( userForm: 
    {name: string,
     mail: string,
     city: string,
     password: string
    }) {
      axios
      .post(`${BACK_URL}/users`, userForm)
      .then((res) => console.log('User created:', res))
      .catch((err) => console.error('Error creating user:', err)) 
};
