import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const NameCounter: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [vowelCount, setVowelCount] = useState<number>(0);
  const [consonantCount, setConsonantCount] = useState<number>(0);

  const countVowels = (input: string): number => {
    return input.replace(/[^aeiouAEIOU]/g, '').length;
  };

  const countConsonants = (input: string): number => {
    return input.replace(/[aeiouAEIOU\s]/g, '').length;
  };

  const handleNameChange = (text: string) => {
    setName(text);
    setVowelCount(countVowels(text));
    setConsonantCount(countConsonants(text));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your name"
        onChangeText={handleNameChange}
        value={name}
      />
      <Text style={styles.result}>Name Length: {name.length}</Text>
      <Text style={styles.result}>Vowel Count: {vowelCount}</Text>
      <Text style={styles.result}>Consonant Count: {consonantCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color:'black',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    color: 'green',
  },
  result: {
    fontSize: 16,
    marginBottom: 5,
    color: 'red',
  },
});

export default NameCounter;
