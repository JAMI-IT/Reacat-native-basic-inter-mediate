import {View, Text} from 'react-native';
import React from 'react';
import {AppRegistry} from 'react-native';

AppRegistry.registerComponent(appName, () => App);

const Greeting: React.FC = () => {
  type User = {
    name: string;
    age: number;
    hobbies?: string[];
    nationality: 'British' | 'American' | 'Estonian';
  };

  const User1: User = {
    name: 'Jami',
    age: 21,

    hobbies: ['Cricket ', 'Tenius ', 'Gardening'],
    nationality: 'British',
  };

  const User2: User = {
    name: 'Jami',
    age: 21,
    nationality: 'British',
  };
  console.log('USER 2 :', User2);

  return <View style={{margin: 10, alignItems: 'center'}}></View>;
};

export default Greeting;
