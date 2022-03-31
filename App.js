import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableWithoutFeedback, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello World!</Text>
      <Button title="Click Me!" onPress={() => console.log("pressed")}> </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
