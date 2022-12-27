import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {useAppContext} from '../App.provider';
import {MoodItemRow} from '../components/MoodItemRow';
const History: React.FC = () => {
  const appContext = useAppContext();
  return (
    <ScrollView>
      {appContext.moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default History;
