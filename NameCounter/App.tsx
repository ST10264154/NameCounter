import React from 'react';
import { View, StyleSheet } from 'react-native';
import NameCounter from './NameCounter';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <NameCounter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
