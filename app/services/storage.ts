import * as SecureStore from "expo-secure-store";

const postDataStorage = async (
  id: string,
  name: string,
  mail: string,
  city: string,
  token: string
) => {
  try {
    await SecureStore.setItemAsync("token", token);
    await SecureStore.setItemAsync("id", id);
    await SecureStore.setItemAsync("mail", mail);
    await SecureStore.setItemAsync("city", city);
    await SecureStore.setItemAsync("name", name);
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

const getDataStorage = async (): Promise<{
  name: string | null;
  mail: string | null;
  city: string | null;
} | null> => {
  try {
    const name = await SecureStore.getItemAsync("name");
    const mail = await SecureStore.getItemAsync("mail");
    const city = await SecureStore.getItemAsync("city");
    if (!city && !mail && !city) {
      return null;
    }
    return { name, mail, city };
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getPrivateData = async (
  key: string | null
): Promise<string | { id: string | null; token: string | null } | null> => {
  try {
    if (key == null) {
      const id = await SecureStore.getItemAsync("id");
      const token = await SecureStore.getItemAsync("token");
      return { id, token };
    }
    if (key === "token" || key === "id") {
      return await SecureStore.getItemAsync(key);
    }
    return null;
  } catch (error) {
    console.error("Error retrieving private data:", error);
    return null;
  }
};

const destroyDataStorage = async () => {
  const storageKeys = ["id", "name", "mail", "city", "token"];
  try {
    storageKeys.map(async (key) => await SecureStore.deleteItemAsync(key));
    console.log("All items deleted");
  } catch (error) {
    console.error("Error deleting items:", error);
  }
};
export default {
  postDataStorage,
  getDataStorage,
  getPrivateData,
  destroyDataStorage,
};
