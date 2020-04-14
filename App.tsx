import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Button } from 'react-native';
//import { createStackNavigator } from 'react-navigation-stack';

//import * as FileSystem from 'expo-file'

const App = () => {
  const [check, setCheck] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
      {/* <Button title='Push' onPress={()=>props.navigation.push('App')}/> */}
      <Switch value={check} onValueChange={()=>setCheck(!check)}/>
      {
        check?
        <Text style={styles.text}>You opened me!</Text> :
        null
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 100
  },
  text: {
    fontSize: 30
  }
});

// App.navigationOptions = {
//   title: 'Test'
// }
// const AppNavigator = createStackNavigator({
//   App,
// })

export default App