//import liraries ==================================

import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

// create a component ==============================

const App = () => {
  return (
    <View style={styles.containerCodigo}>
      <Text>Codigo</Text>
    </View>
  );
};

// define your styles ===============================

const styles = StyleSheet.create({
  containerCodigo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app ===========

export default App;
