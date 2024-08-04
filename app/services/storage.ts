import AsyncStorage from '@react-native-async-storage/async-storage';

// const loadData = async () => {
//     try {
//       const name = await AsyncStorage.getItem('name');
//       const city = await AsyncStorage.getItem('city');
//       if (name !== null) {
//         setSavedName(name);
//       }
//       if (city !== null) {
//         setSavedCity(city);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

  const saveNameStorage = async (value : string) => {
    try {
      await AsyncStorage.setItem('name', value);
    } catch (error) {
      console.error(error);
    }
  };
  const saveCityStorage = async (value : string) => {
    try {
      await AsyncStorage.setItem('userCity', value);
    } catch (error) {
      console.error(error);
    }
  };

  export { saveNameStorage, saveCityStorage};