import AsyncStorage from '@react-native-async-storage/async-storage';

  const loadCity = async (setCity: (value: string) => void) => {
    try {
      const city = await AsyncStorage.getItem('userCity');
      if (city !== null) {
        setCity(city);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const loadName = async (setName: (value: string) => void) => {
    try{
      const name = await AsyncStorage.getItem('userName');
      if (name !== null) {
        setName(name);
      }
    } catch (err){
      console.error(err)
    }
  }

  const saveName = async (value : string) => {
    try {
      await AsyncStorage.setItem('userName', value);
    } catch (err) {
      console.error(err);
    }
  };
  const saveCity = async (value : string) => {
    try {
      await AsyncStorage.setItem('userCity', value);
    } catch (err) {
      console.error(err);
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
    } catch (err) {
      console.error('Failed to clear AsyncStorage:', err);
    }
  };

  export default { saveName, saveCity, loadName, loadCity, clearStorage};