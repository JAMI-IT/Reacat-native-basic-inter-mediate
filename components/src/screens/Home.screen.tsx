import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MoodPicker from '../components/MoodPicker';
import {useAppContext} from '../App.provider';
// import {MoodOptionType, MoodOptionWithTimestamp} from '../types';
import {MoodItemRow} from '../components/MoodItemRow';
const Home: React.FC = () => {
  // const [moodList, setMoodList] = React.useState<MoodOptionWithTimestamp[]>([]);
  // const handleSelectMood = React.useCallback((mood: MoodOptionType) => {
  //   setMoodList(current => [...current, {mood, timestamp: Date.now()}]);
  // }, []);
  // console.log('MoodList', moodList);
  const appContext = useAppContext();
  return (
    <View style={styles.container}>
      <MoodPicker onSelect={appContext.handleSelectMood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Home;
