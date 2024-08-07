import AsyncStorage from '@react-native-async-storage/async-storage';

  const loadCity = async (setCity: (value: string) => void) => {
    try {
      const city = await AsyncStorage.getItem('city');
      if (city !== null) {
        setCity(city);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const loadName = async (setName: (value: string) => void) => {
    try{
      const name = await AsyncStorage.getItem('name');
      if (name !== null) {
        setName(name);
      }
    } catch (err){
      console.error(err)
    }
  }

  const saveName = async (value : string) => {
    try {
      await AsyncStorage.setItem('name', value);
    } catch (error) {
      console.error(error);
    }
  };
  const saveCity = async (value : string) => {
    try {
      await AsyncStorage.setItem('userCity', value);
    } catch (error) {
      console.error(error);
    }
  };

  export default { saveName, saveCity, loadName, loadCity};