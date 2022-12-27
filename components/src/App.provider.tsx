import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MoodOptionType, MoodOptionWithTimestamp} from './types';

const storageKey = 'my-app-data';

type AppData = {
  moods: MoodOptionWithTimestamp[];
};

const getAppData = async (): Promise<AppData | null> => {
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

const setAppData = async (newdata: AppData) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(newdata));
  } catch {}
};

type AppContextType = {
  greeting: string;
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: (mood: MoodOptionType) => void;
};
const defaultValue = {
  greeting: '',
  moodList: [],
  handleSelectMood: () => {},
};

const AppContext = React.createContext<AppContextType>(defaultValue);

export const AppProvider: React.FC = ({children}) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);
  const handleSelectMood = React.useCallback((mood: MoodOptionType) => {
    setMoodList(current => {
      const newValue = [...current, {mood, timestamp: Date.now()}];
      setAppData({moods: newValue});
      return newValue;
    });
  }, []);

  React.useEffect(() => {
    const gerDataFromStorage = async () => {
      const data = await getAppData();
      if (data) {
        setMoodList(data.moods);
      }
    };
    gerDataFromStorage();
  }, []);

  return (
    <AppContext.Provider
      value={{greeting: 'Hello', moodList, handleSelectMood}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
