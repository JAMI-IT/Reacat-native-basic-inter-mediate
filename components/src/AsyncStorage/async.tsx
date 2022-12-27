import AsyncStorage from '@react-native-async-storage/async-storage';
import {MoodOptionWithTimestamp} from '../types';
const storageKey = 'my-app-data';

type AppData = {
  moods: MoodOptionWithTimestamp[];
};

export const getAppData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(storageKey);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch {
    return null;
  }
};

export const setAppData = async (newdata: AppData) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(newdata));
  } catch {}
};
