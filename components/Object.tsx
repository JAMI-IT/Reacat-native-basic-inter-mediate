import React from 'react';
import {Text} from 'react-native';

type UserProps = {
  firstName: string;
  lastName: string;
};

const User: React.FC<UserProps> = ({firstName, lastName}) => {
  return (
    <Text style={{color: 'red'}}>
      Using Props :{firstName} {lastName}
    </Text>
  );
};

export default User;
