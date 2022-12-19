import {View, Text} from 'react-native';
import React from 'react';

const Exercise1: React.FC = () => {
  type Pet = {
    name: string;
    kind: 'cat' | 'dog' | 'fish';
    age: number;
    favouriteFoods: string[];
    speak?: () => void;
    owner: {
      name: string;
      age: number;
    };
  };

  const pets: Pet[] = [
    {
      name: 'Fluffy',
      kind: 'cat',
      age: 10,
      favouriteFoods: ['fish', 'chicken'],
      speak: () => console.log('meow'),
      owner: {
        name: 'Sarah',
        age: 18,
      },
    },
    {
      name: 'Teddy',
      kind: 'dog',
      age: 2,
      favouriteFoods: ['anything off your table'],
      speak: () => console.log('woof'),
      owner: {
        name: 'Mary',
        age: 24,
      },
    },
    {
      name: 'Bubbles',
      kind: 'fish',
      age: 1,
      favouriteFoods: ['algae'],
      owner: {
        name: 'Steve',
        age: 30,
      },
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>Solution</Text>
      {pets.map((item: any) => {
        return (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.kind}</Text>
            <Text>{item.age}</Text>
            {item.favouriteFoods.map((item: any) => {
              return (
                <View>
                  <Text>{item}</Text>
                </View>
              );
            })}
            <Text>{item.owner.name}</Text>
            <Text>{item.owner.age}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Exercise1;
