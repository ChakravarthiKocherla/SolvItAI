import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(res => setMessage(res.data))
      .catch(err => setMessage('Error connecting to backend'));
  }, []);

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>{message}</Text>
    </View>
  );
}
